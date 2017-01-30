// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .controller('SampleController', function ($scope, $cordovaLocalNotification, $ionicPlatform) {

                    /**
                     * Approach 1
                     */
                    
//                    $cordovaLocalNotification.schedule({                    
//                        id: 1,
//                        title: 'Instant',
//                        text: 'Instant Notification',
//                        icon: 'file://img/pushbig.png',
//                        smallIcon: 'file://img/pushsmall.png',
//                        at: now,
//                        data: {meetingId: "123#fg8"}
//                    }).then(function () {
//                        console.log("Instant Notification set");
//                    });
//                    

            
            $scope.asg_data = [
                {
                    "_id": "588ea43a0209c315aa09d2e5",
                    "updatedAt": "2017-01-30T02:26:02.583Z",
                    "createdAt": "2017-01-30T02:26:02.583Z",
                    "_user": "5880c36904e1cb34a91dfd12",
                    "_course": {
                        "_id": "588889c860bdae5a4cf3f4eb",
                        "start_time": "16:32",
                        "end_time": "16:37",
                        "icon": "bank.png",
                        "color": "#c79431",
                        "reminders": "on",
                        "days": [1, 2, 3, 4],
                        "course_name": "math",
                        "start_time_mod": "4:32 pm",
                        "end_time_mod": "4:37 pm"
                    },
                    "assignment_type": "HW",
                    "assignment_date": "01/30/2017",
                    "day": 3,
                    "dayNum": 15,
                    "schedule_type": "B",
                    "is_completed": false,
                    "assignment_pic": null,
                    "notes": "test30",
                    "reminder": true, "__v": 0,
                    "assignment_pic_url": "http://162.243.110.92:3633/uploads/assignment_pic/null",
                    "assignment_pic_name": null
                },
                {
                    "_id": "588ea4700209c315aa09d2e6",
                    "updatedAt": "2017-01-30T02:26:56.099Z",
                    "createdAt": "2017-01-30T02:26:56.099Z",
                    "_user": "5880c36904e1cb34a91dfd12",
                    "_course": {"_id": "5880c5f204e1cb34a91dfd15",
                        "start_time": "16:39",
                        "end_time": "16:45",
                        "icon": "atom.png",
                        "color": "#abdb85",
                        "reminders": "on",
                        "days": [1, 2, 3, 4],
                        "course_name": "English",
                        "start_time_mod": "4:39 pm",
                        "end_time_mod": "4:45 pm"
                    },
                    "assignment_type": "HW",
                    "assignment_date": "01/30/2017",
                    "day": 3, "dayNum": 15, "schedule_type": "B", "is_completed": false, "assignment_pic": null,
                    "notes": "test2", "reminder": true, "__v": 0,
                    "assignment_pic_url": "http://162.243.110.92:3633/uploads/assignment_pic/null",
                    "assignment_pic_name": null}, {"_id": "58883ab260bdae5a4cf3f4e8",
                    "updatedAt": "2017-01-25T05:42:10.719Z",
                    "createdAt": "2017-01-25T05:42:10.719Z",
                    "_user": "5880c36904e1cb34a91dfd12",
                    "_course": {"_id": "5880c5f204e1cb34a91dfd15", "start_time": "16:39", "end_time": "16:45", "icon": "atom.png", "color": "#abdb85", "reminders": "on", "days": [1, 2, 3, 4], "course_name": "English", "start_time_mod": "4:39 pm", "end_time_mod": "4:45 pm"},
                    "assignment_type": "HW", "assignment_date": "01/31/2017", "day": 4, "dayNum": 16, "schedule_type": "B",
                    "is_completed": false, "assignment_pic": null, "notes": "test2", "reminder": true, "__v": 0,
                    "assignment_pic_url": "http://162.243.110.92:3633/uploads/assignment_pic/null", "assignment_pic_name": null
                }];
            
            $ionicPlatform.ready(function () {
                var now = new Date();
                
                /**
                 INSTANT
                 **/

                $scope.scheduleInstantNotification = function () {
                    
                    


                    /**
                     * Approach 2
                     */

                    cordova.plugins.notification.local.schedule({
                        id: 1,

                        title: 'Instant',
                        /*
                         text: 'Instant Notification < icon - res://pushbig.png > < smallIcon - res://pushsmall.png >',  // 
                         icon: 'res://pushbig.png',
                         smallIcon:  'res://pushsmall.png',*/
                        text: 'Instant Notification',
                        icon: 'file://img/pushbig.png',
                        smallIcon: 'file://img/pushsmall.png',
                        at: now,
                        data: {meetingId: "123#fg8"}
                    }, function (res) {
                        console.log("Instant Notification set");
                        console.log("res: ", res);
                    });
                };

                /**
                 USING 'at' option
                 **/
                $scope.scheduleDelayedNotification = function () {
                    var now = new Date().getTime();
                    //var _10SecondsFromNow = new Date(now + 10 * 1000);

                    $cordovaLocalNotification.schedule({
                        id: 2,
                        title: 'Warning',
                        text: 'Im so late',
                        at: now
                    }).then(function (result) {
                        console.log(result);
                        console.log('Notification 2 triggered');
                    });
                };
                
                /**
                 * Multiple Notification setup
                 */
                $scope.multiNotification = function(){
                    
                    cordova.plugins.notification.local.schedule([{
                        id: 3,
                        text: "Multi Notification 3",
                        at: now,
                        //sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
                        data: { secret: '234234234234' }
                    },{
                        id: 4,
                        title: "Local Notification Example",
                        text: "Multi Notification 4",
                        at: now
                        //icon: "http://sciactive.com/pnotify/includes/github-icon.png"
                    }], function(result){
                        console.log("result : ", result);
                        console.log("Multi notification set");
                    });
                    
                    /*$cordovaLocalNotification.schedule([{
                        id: 3,
                        text: "Multi Notification 3",
                        //sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
                        data: { secret: '234234234234' }
                    },{
                        id: 4,
                        title: "Local Notification Example",
                        text: "Multi Notification 4",
                        //icon: "http://sciactive.com/pnotify/includes/github-icon.png"
                    }]).then(function(result){
                        console.log("result : ", result);
                        console.log("Multi notification set");
                    });*/
                    
                }
                
                $scope.dynamicNotification = function(){
                    var opt = [], opt_part = {};
                    $scope.asg_data.forEach(function(asmnt){
                        opt_part = {
                            'id': asmnt._id, 
                            'title': 'Flashplanner LN', 
                            'text' : asmnt._course.course_name + ' ' + asmnt.assignment_type + ' is pending at ' + asmnt._course.start_time_mod,
                            at: now
                        };
                        opt.push(opt_part);
                    });
                    if(opt.length > 0){
                        $cordovaLocalNotification.schedule(opt)
                                .then(function(result){
                                    console.log("result: ", result);
                                    console.log("dynamic notification set");
                                });
                    }
                    
                    //console.log("opt: ", opt);
                }
              
                
                $scope.getAllIds = function(){
                    cordova.plugins.notification.local.getAllIds(function (ids) {
                        // getIds() as alias can also be used!
                        console.log(ids);
                    });
                }

            });



        })
