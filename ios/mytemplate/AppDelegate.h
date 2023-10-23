#import <UserNotifications/UNUserNotificationCenter.h>
#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : RCTAppDelegate <UNUserNotificationCenterDelegate>

@property (nonatomic, strong) UIWindow *window;


@end
// ==============


// #import <React/RCTBridgeDelegate.h>
// #import <UIKit/UIKit.h>

// @interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

// @property (nonatomic, strong) UIWindow *window;

// @end
