# Roombanker User Manual

## Purpose of the Manual

The main purpose of the manual contains three parts:

● To introduce the features and specifications of Roombanker Security Product System

● To introduce how to register, configure and operate the devices from RB Link APP

● To introduce the installation and function test method of the whole system



## Scope of the Manual

All the functions described in the manual are based on the products and version showing in the form below. You may find some functions cannot be achieved if your devices are not the latest version, please check your devices version and update to the latest from APP if so.

**Device name and latest available version**

|    **Device**     | **Version** |           **Device**           | **Version** |
| :---------------: | :---------: | :----------------------------: | :---------: |
| Gateway (Station) |   v1.0.0    |           PIR Sensor           |   v1.0.0    |
|  Gateway (Pico)   |   v1.0.0    |          Panic Button          |   v1.0.0    |
|      Keypad       |   v1.0.0    |      Door Magnetic Sensor      |   v1.0.0    |
|       Relay       |   v1.0.0    |      Water Leak Detector       |   v1.0.0    |
|    Wall Switch    |   v1.0.0    | Temperature & Humidity Monitor |   v1.0.0    |
|   Indoor Siren    |   v1.0.0    |         Smoke Detector         |   v1.0.0    |
|   Outdoor Siren   |   v1.0.0    |          RB Link APP           |   v1.0.0    |
|      Keyfob       |   v1.0.0    |                                |             |
|  Smart Plug (US)  |   v1.0.0    |                                |             |
|  Smart Plug (EU)  |   v1.0.0    |                                |             |
|  Smart Plug (UK)  |   v1.0.0    |                                |             |
|  Smart Plug (IT)  |   v1.0.0    |                                |             |

<br />

<br />

## Symbol Conventions

| **Symbol**                                                   | **Description**                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![Danger](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Danger.png)**Danger** | Indicates a hazardous situation which, if not avoided, will or could result in death or serious injury. |
| ![caution](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/caution.png)**Caution** | Indicates a hazardous situation which, if not avoided, will or could result in equipment damage or performance degradation. |
| ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** | Provides additional information to emphasize or supplement important points of the main text. |

---



<br />

<br />

# **Charter 1. System Introduction**

##  1.1 Overview of the System

● **Product Positioning:** 

Roombanker focus on the smart security solutions centered around wireless intrusion alarm system, and extended business to a multitude of applications such as Energy Management, Environmental Safety, Home Automation, Asset Tracking and Health Monitoring. All of these applications can be conveniently managed via a one-stop mobile app.

<br />

● **Application Scenario:** 

Roombanker offers security solutions to Residential and SMB users, such as Apartment, House, Villa, Small Shop, Office Building, Motel, and more.

<br />

● **System Topology:** 

It has four parts to consist of the whole system, which are Peripherals, Hub, Roombanker Cloud, RB Link APP.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Topology.png" width="720" />
</div>



● **Working Principle:** 

The Home Security Hub is the brain of the whole system, it communicates with peripherals via RBF/Bluetooth/Zigbee wireless protocol. 

Once an alarm occurred, Hub reports the alarm to cloud via LAN/Wi-Fi/4G, activates the sirens within 0.5 seconds, and notifies the users via APP. Meanwhile, if the users operate the system, such as disarm, Hub will turn siren off and disarm all sensors.

<br />

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note**
>
> **RBF** is a self-developed encrypted wireless protocol by Roombanker, aim to enhance the communication between devices, the transmission range is up to 3,500m in open area. It contains advanced technologies design, such as TDMA, Frequency Hopping, Power Adjustment, Multi-Band Transmission with Low Power, to guarantee a stable, secure, highly efficient wireless communication.

<br />

## 1.2 System Key Features

● Ultra-long range, reliable transmission

● Reliable alarm protection, day and night

● Multi-mode arming/disarming

● Instant alarm and real-time notification

● Manage smart devices with just one APP

● Esay installation & Easy DIY

<br />

## 1.3 Spec of Hub

Home security Hub has two different models, called **Station** and **Pico**, below form describes the brief comparison between two models.

| **Specifications**          |                **Home Hub (Pico)**                |              **Home Hub (Station)**               |
| --------------------------- | :-----------------------------------------------: | :-----------------------------------------------: |
| **Transmission Technology** |                        RBF                        |        RBF / **Zigbee 3.0** / **BLE 5.2**         |
| **Transmission Method**     |              Two-way wireless (RBF)               |              Two-way wireless (RBF)               |
| **Transmission Frequency**  |                868 / 915MHz (RBF)                 |                868 / 915MHz (RBF)                 |
| **Transmission Security**   |              AES128 Encryption (RBF)              |              AES128 Encryption (RBF)              |
| **Peripherals Connected**   |                     Up to 64                      |                   Up to **128**                   |
| **Users**                   | 1 Super Admin+4 Admin+32 App Users+32 Local Users | 1 Super Admin+4 Admin+32 App Users+32 Local Users |
| **Cellular**                |                         /                         |                  **1 SIM (4G)**                   |
| **Wi-Fi**                   |                2.4G，802.11 b/g/n                 |                2.4G，802.11 b/g/n                 |
| **Ethernet**                |               1 x RJ45, 10/100Mbps                |               1 x RJ45, 10/100Mbps                |
| **Firmware Upgrade**        |                    OTA via APP                    |                    OTA via APP                    |
| **Power Supply**            |                  Type-C，5VDC 2A                  |                  Type-C，5VDC 2A                  |
| **Battery**                 |                         /                         |             **2600mAh 18650 battery**             |
| **Backup time**             |                         /                         |             **Up to 8h power backup**             |
| **Weight**                  |                       260g                        |                       320g                        |
| **Operation Temperature**   |                    -10℃ ~ +45℃                    |                    -10℃ ~ +45℃                    |
| Dimension (W×H×D)           |               150mm x 150mm x 37mm                |               150mm x 150mm x 37mm                |

---



<br />

# **Charter 2. Start Up Hub**

## 2.1 App Installation

1. Scan the QR code below or search "RB Link" in Google Play or App Store to download and install the App.

   <div align="center">
     <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/image-20231221181603900.png" width="200" />
   </div>

2. Register and log in to your account (with email) by following the instructions in the app.

   > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : *as of now, e-mail is the only supported method for account registration*

<br />

## 2.2 Add Home Security Hub

1. Insert the charging cable into the home security hub and turn on the power switch. Wait a moment until the center indicator starts flashing green continuously.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Cloud%20Indicator%20-%20ON(1).jpg" width="300" />
</div>

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : 
>
> - *The Home Security Hub `Pico` does not have an on/off switch, so it starts automatically when powered on*
> - *If the green indicator does not begin to flash within two minutes, please press and hold the "Cloud" button on the top of Home Security Hub for 5 seconds until the indicator begins flashing.*

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221192125357.png" width="300" />
</div>

2. Go to the home page and then click "**+**" to add the home security hub by scanning the QR codes on device or on the packaging.

3. You can connect the device to the Internet in the following ways:

   - **Wi-Fi**:

     Connect Wi-Fi by following the instructions in the App.

     <br />

   - **Ethernet** or **Cellular Network**:   

     Connect to the Internet by plugging in a network cable or inserting a SIM card.When the network connection is functioning properly, the hub can automatically connect to the cloud platform without any additional user intervention.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221193658820.png" width="200" />
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221193711007.png" width="200" />
</div>



> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *It recommended to apply all the three network methods when using the system, to work against network failure*



The Cloud Indicator turns `blue` when the connection is successful.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221194505174.png" width="300" />
</div>

4. The Home Security Hub is added successfully , you can rename the device.

<br />

## 2.3 Home Page Display

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221194703486.png" width="300" />
</div>

1. Add the hub by scanning the QR code.
2. Click to enter the management page of the hub.
3. Quick Arming / Disarming.
4. Custom scenes display area.
5. Peripherals display area.

<br />

## 2.4 Hub Status Introduction

### 2.4.1 Hub icons

Icons display some of the Hub status.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221195008872.png" width="300" />
</div>

|                             Icon                             | Value                                                        |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| ![Wi-Fi](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Wi-Fi.png) | The icon indicates that the hub is currently connected to the cloud server via Wi-Fi. |
| ![Ethernet](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Ethernet.png) | The icon indicates that the hub is currently connected to the cloud server via Ethernet. |
| ![4G](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/4G.png) | The icon indicates that the hub is currently connected to the cloud server via Cellular Network. |
| ![Battery Level](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Battery%20Level.png) | Lithium Battery Level                                        |
| ![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/room.png) | Room management. <br />*For more information, please turn to [Charter 3. Room Management](#charter-3.-room-management).* |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *When multiple networking methods are available at the same time, the priority is as follows:* *`Ethernet` > `Wi-Fi` > `Cellular Network`.* *It will only show the icon of the networking method that is currently in use.*

### 2.4.2 Hub status

Hub states can be viewed in the RB Link (App).

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221201418121.png" width="250" />
</div>


|       **Parameter**        | **Meaning**                                                  |
| :------------------------: | ------------------------------------------------------------ |
|      Associated scene      | The number of scenes associated with Hub                     |
|        Power Supply        | The current status of the hub's power supply<br />**Connected** - the hub is connected to power supply<br />**Disconnected** - no power supply is available |
|          Ethernet          | Internet connection status of the hub via Ethernet:<br />**Connected** - The hub can connect to the cloud via Ethernet<br />**Disconnected** - The hub cannot connect to cloud via Ethernet |
|           Wi-Fi            | Internet connection status of the hub via Wi-Fi:<br />![Wi-Fi](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Wi-Fi.png)- The hub can connect to cloud via Wi-Fi<br />![Wifi lost](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Wifi%20lost.png)- The hub cannot connect to cloud via Wi-Fi |
|       Mobile Network       | The hub connection status to the mobile Internet:<br />**Connected** - The hub can connect to the cloud via Cellular Network.<br />**Disconnected** - The hub cannot connect to cloud via Cellular Network |
|       Battery Status       | Battery level of the device                                  |
|         Lid Status         | Status of the tamper that responds to hub dismantling:<br />**Normal** - The hub is installed on the back panel<br />**Triggered** - The hub is removed from back panel |
| Wireless Noise Level (dBm) | The surrounding environment will affect the noise level of hub. lt is recommended that you install an environment where the noise level is in the range of `-128 `~ `-95` dBm. |



## 2.5 Hub Setting

You can click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)"  on the top right corner of the hub to configure parameters.

### 2.5.1 Basic Information

| **Parameter**  | **Meaning**                                                  |
| -------------- | ------------------------------------------------------------ |
| Device name    | Click on the device name and enter the a nickname if it's in need. |
| Device model   | Display the device model.                                    |
| MAC Address    | Display the MAC address of the device.                       |
| Serial Number  | Display the serial number of the device.                     |
| Version Number | The current firmware version of the device is displayed here. If a new version is available, you can simply click to upgrade via OTA. |

### 2.5.2 User Management

Please turn to [Charter 5. User Management](#charter-5.-user-management) for more details about user management.

### 2.5.3 System

- **Time Zone**

  Click "**>**" and then select your time zone, then the time will be updated automatically.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Time%20Zone.png" width="500" />
</div>

- **Cellular Network**
  - **Username**, **Password** and **APN** - After inserting the SIM card, the Hub automatically obtains the necessary information and connects to the network. If you are unable to connect, please contact your network operator to obtain these information and perform manual configuration.
  - **Used Data (This month)** - Show current data usage.
  - **Monthly data allowance** - You can set a data usage limit here, and the APP will send a notification when that limit is exceeded. 

![image-20231221215745089](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221215745089.png)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *The calculation standard for device data usage might different from telecom operators. Please refer to the actual bill for accurate data usage.*



- **Fault Check**

  You can configure fault detection rules. After you enable it, the Hub performs periodic detection and uploads relevant information according to the configured rules.

|     **Parameter**     | **Meaning**                                                  |
| :-------------------: | ------------------------------------------------------------ |
|     Battery Loss      | Monitors battery connection status to ensure it's functioning normally.<br />**Open** **-** Monitoring function is active<br />**Close** - Monitoring function is disabled |
|      Low Battery      | Monitors low battery levels (below 20%) <br />**Open** **-** Monitoring function is active<br />**Close** - Monitoring function is disabled |
|     Ethernet Lost     | Monitors ethernet connectivity, and sends an alert to the APP if an ethernet outage lasts longer than a predefined threshold. |
|      Wi-Fi Lost       | Monitors Wi-Fi connectivity, and sends an alert to the APP if Wi-Fi outage lasts longer than a predefined threshold. |
| Cellular Network Lost | Monitors Cellular Network connectivity, and sends an alert to the APP if Cellular Network outage lasts longer than a predefined threshold. |
|  External Power Lost  | Monitors external power supply connection status <br />**Open** - Monitoring function is active<br />**Close** - Monitoring function is disabled |

- **24H Lid Detection**

  This feature is enabled by default, detecting hub tampering and triggering an alarm if disassembly is detected. It can be used in both armed and disarmed states.



### 2.5.4 Communication

During this period, if your Hub is frequently online and offline, you will not receive any offline notifications. Due to delay or status synchronization, the delay time may be different.

### 2.5.5 Maintenance

- **Walk Test**

  Enable walk test, you can trigger the corresponding sensors individually in order to check if they are installed and configured correctly. When this function is enabled, only the indicators in sensors will flash red instead of pushing alarm notification. and you can also see the corresponding status changes from `Not Triggered` to `Triggered` if the sensor detects an alarm event.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : *The walk test can only last for 20 minutes and then turn off automatically.*

- **Firmware Upgrade**

  The current firmware version of the device is displayed here. If a new version is available, you can simply click to upgrade.

- **Device Reset**

  - **Restart Hub** - Click `Restart` button to restart the hub without changing any settings.
  - **Factory Default** - Click `Restore` button to reset all settings to their factory defaults.
  - **Reset Network** - Click `Default`  button to reset the network settings while preserving detectors and peripherals.

- **SSH**

  When SSH is enabled, our technical support staff can help you troubleshoot issues with your device remotely. SSH is disabled by default and can only be enabled by you and other Admin users.

### 2.5.6 User Guide

You can click to view the Quick Start Guide document of the Hub.

---



<br />

# Charter 3. Room Management

## 3.1 Create and manage rooms

● **Definition of Room:** the area where the peripheral is installed in house.

● **Function of Room:** allow each peripheral to be assigned to just one room. Admins can assign management permissions to different users on different rooms. 

![Room management](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Room%20management.png)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *The above recommendations are for reference only and may vary depending on the specific layout and type of home. Adjustments to the room division and hub or peripherals placement may be necessary to suit your specific needs.*

### 3.1.1 Create a room

Click "![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/room.png)" on the management page of Hub to view your rooms.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221222433259.png" width="300" />
</div>

Click `Create a New Room` to add a new room, you can fill in the room name by yourself or choose one of the recommended name generated by app.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *One hub can support up to 64 rooms.*

### 3.1.2 Rename a room

Click a room whose name you want to modify, then you can edit its name by yourself.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221223150842.png" width="300" />
</div>



### 3.1.3 Delete a room

Deleting a room is a snap. Just swipe left on the room in the list and click `Delete`.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Delete%20a%20room.png" width="300" />
</div>

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *Make sure to remove any devices from the room before deleting it.*

### 3.1.4 View Peripherals in a specific room

In the Hub management page, click on a specific room to view all the associated peripherals.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/peripheral%20list%20in%20room.png" width="250" />
</div>
---



<br />

# **Charter** 4. Peripheral Setting



## 4.1. Adding peripherals

Home Security System supports 2 types of wireless peripheral adding:

● **By QR Code:** adding peripherals `one by one`.

● **By Enrollment Mode:** adding multiple peripherals `in bulk`.

### Option 1: Adding via QR Code

This is a way to add your wireless peripherals (RBF) one by one by scanning device QR Code. And QR Code can be found on device or device package. Please refer to the following guide to add your peripheral via QR Code.

<br />

1. Open RB Link App. Click name of your hub to turn to the "Main Page" of your hub.
2. Click `+`  icon on the top right corner, and then click `Scan` to open your phone's camera to scan device QR Code.
3. When QR Code is scanned, App will turn to **Device Adding Guide** page, you can follow the guide to operate your device and click `Next` to wait for adding.
4. When your device is added, please assign a room for this device and edit the device name.
5. Click `Done` to finish adding.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Adding%20via%20qr%20code.png" width="700" />
</div>

After all above steps, your device will show up on the product list of the assigned room or on the product list of **Smart Home**.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note**:
>
> - Only the RBF peripherals (with "![RBF green (1)](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/RBF%20green%20(1).png)" printed on their packages) support to be added via QR Code, while Bluetooth and Zigbee peripherals doesn't work.
> - Since wall switch needs to connect to mains power (110V~ / 220V~) as a power supply, it is recommended to use "Adding via Scan QR Code" before cable connection.

### Option 2: Adding via Enrollment Mode

This is a way to add your wireless devices (RBF, Zigbee3.0) in batches by scanning devices over-the-air. Please refer to the following guide to add your devices via Enrollment Mode.

![image-20231221215745089](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221215745089.png)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - All the rest devices except Wall Switch are recommended to use "Adding via Enrollment Mode". 
> - Keyfob needs to be assigned to a user after enrolled.
> - Keypad needs to be set which rooms can be controlled after enrolled.

<br />

## 4.2 Peripheral Icons

|                             Icon                             | Meaning                                                      |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| ![Signal](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Signal.png) | Device signal strength between the wireless peripherals and hub. |
| ![Battery](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Battery.png) | Device battery status. Red means low battery                 |
| ![alarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/alarm.png) | Alarm triggered, including device alarm and tamper alarm.    |
| ![motion](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/motion.png) | PIR Motion alarm triggered.<br />**for PIR Sensor only.*     |
| ![water leak](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/water%20leak.png) | Water Leak alarm triggered.<br />**for Water Leak Detector only.* |
| ![smoke](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/smoke.png) | Smoke alarm triggered.<br />**for Smoke Detector only.*      |
| ![charging](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/charging.png) | Solar Panel is charging the battery.<br />**for Outdoor Siren only* |

<br />

## 4.3 PIR Sensor

### 4.3.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20front.png" width="300" />
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20Top.png" width="300" />
</div>

| **Appearance**      | **Description**                                              |
| ------------------- | ------------------------------------------------------------ |
| **LED Indicator**   | Red / Green / Orange<br />**Used to indicate alarm status, signal strength status, and Find Me status.* |
| **Register Button** | Press and hold for 5s to add the PIR to the Hub.<br />**Register Button is only used for re-adding or connecting the peripheral to another hub.* |
| **PIR Lens**        | Fresnel lens<br />**Used to detect motion within the detection range.* |
| **Case Lock**       | Rotate to lock / unlock the PIR case.                        |

### 4.3.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20State.png" width="250" />
</div>

|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this PIR. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6.-Scene-management) for more details.* |
|    **Arm Status**     |                         Arm / Disarm                         | Shows the arm status of the PIR. When it’s armed, the PIR could detect motion events and then report alarm to Hub immediately.<br />**The PIR will enter sleep mode for energy-saving.* |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the PIR is triggered.<br />**Alarm will only be triggered when PIR is armed.* |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of PIR is open or not.                 |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the PIR and the hub.       |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the PIR and the Hub.<br />**The PIR will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of PIR. <br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

### 4.3.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

![image-20231221215745089](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221215745089.png)

|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc. <br />And you can also edit the device name here by yourself. |
|   **Room Belongs to**    | ![image-20231221233352230](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the PIR to.<br />**When linked to a specific room, the PIR will be displayed on the product list of the room, and the PIR could begin for detecting when the room is armed.* |
|       **Find Me**        | ![image-20231221233401438](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233401438.png) | A function that used to find your PIR among numerous devices. When you enable this function, the indicator in PIR will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![image-20231221233412208](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233412208.png) | A function that used to check the signal strength between PIR and hub at the tested place, which is designed to help you choose the right place for installation. When you enable this function, you can check the signal strength by watching the indicator in PIR and the feedback in app. |
|  **Installation Test**   | ![image-20231221233433396](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233433396.png) | A function that used to test whether the PIR is installed properly. When you enable this function, you can walk in the room to test if the PIR can detect and trigger an alarm properly. The indicator will flash red when it detects successfully. |
|    **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm and malfunctions generated by this PIR will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if it’s defective. Before turning on this function, please ensure that you are aware of the situation to avoid possible personal injury or property damage that may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**  |                           ON / OF                            | When enabled, the PIR will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of PIR.               |
|    **Delete Device**     |                              /                               | Delete the PIR from your hub.                                |

<br />

## 4.4 Door Magnetic Sensor

### 4.4.1 Appearance

![Magnetic](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Magnetic.png)

| **Appearance**                    | **Description**                                              |
| --------------------------------- | ------------------------------------------------------------ |
| **LED Indicator**                 | Red / Green / Orange<br />**Used to indicate alarm status, signal strength status, and Find Me status.* |
| **Register Button**               | Press and hold for 5s to add the Door Magnetic Sensor to the Hub.<br />**Register Button is only used for re-adding or connecting the peripheral to another hub.* |
| **Tamper Switch / Tamper Button** | Used to detect the tamper alarm status of the lid.           |

### 4.4.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/MC%20state.jpg" width="250" />
</div>

|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Door Magnetic Sensor. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6.-Scene-management) for more details.* |
|    **Arm Status**     |                         Arm / Disarm                         | Shows the arm status of the Door Magnetic Sensor. When it’s armed, the Door Magnetic Sensor could detect open/close events and then report alarm to Hub immediately. |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the Door Magnetic Sensor is triggered.         |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the Door Magnetic Sensor’s lid is opened or not. |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Door Magnetic Sensor and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Door Magnetic Sensor and the Hub.<br />**The Door Magnetic Sensor will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Door Magnetic Sensor. <br />**If the battery level is low, the icon will turn red and you’ll receive a malfunction notification in App.* |

### 4.4.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233126628.png" width="250" />
</div>



<br />

## 4.5 Panic Button

### 4.5.1 Appearance



### 4.5.2 State



### 4.5.3 Setting



<br />

## 4.6 Temperature Humidity Monitor

### 4.6.1 Appearance



### 4.6.2 State



### 4.6.3 Setting



<br />

## 4.7 Water Leak Detector

### 4.7.1 Appearance



### 4.7.2 State



### 4.7.3 Setting





<br />

## 4.8 Smoke Detector

### 4.8.1 Appearance



### 4.8.2 State



### 4.8.3 Setting



### 4.8.4 Test



<br />

## 4.9 Indoor Siren

### 4.9.1 Appearance



### 4.9.2 State



### 4.9.3 Setting



<br />

## 4.10 Outdoor Siren

### 4.10.1 Appearance



### 4.10.2 State



### 4.10.3 Setting



<br />

## 4.11 Keypad

### 4.11.1 Appearance



### 4.11.2 State



### 4.11.3 Setting



### 4.11.4 Operation



<br />

## 4.12 Keyfob

### 4.12.1 Appearance



### 4.12.2 State



### 4.12.3 Setting



### 4.12.4 Operation



<br />

## 4.13 Relay

### 4.13.1 Appearance



### 4.13.2 State



### 4.13.3 Setting



<br />

## 4.14 Wall Switch

### 4.14.1 Appearance



### 4.14.2 State



### 4.14.3 Setting



<br />

## 4.15 Smart Plug

### 4.15.1 Appearance



### 4.15.2 State



### 4.15.3 Setting



---



<br />

# Charter 5. User Management

## 5.1 User Type

There are two types of user in this system, named **APP User** and **Local User**.

### 5.1.1 App User

Refer to the users who use APP to operate system and receive notifications, these users must be registered in RB Link APP, the APP users are classified into three types:

- **Super Admin:** The first user who adds the Hub in the APP.
- **Admin:** Can be invited by super admin from APP, and enabled as an admin.
- **Regular User:** Invited by super admin or admin from APP, enabled as a regular user

### 5.1.2 Local User

Refer to the users do not use APP, but only use keypad and keyfob to operate system.

<br />

## 5.2 User Authority

![image-20231221234420015](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221234420015.png)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - Super Admin and Admin users are linked to all rooms by default and cannot be modified.
> - Regular Users and Local Users’ room linkage can be set individually by super admin or admin, so their authorities to the system are also limited by their room authorities.
> - Super admin can configure admin and regular user.
> - Admin can only configure himself and regular user.



<br />

## 5.3 Manage Users

### 5.3.1 App User Management

#### Share Hub to APP User:

Step 1: Enter `My` page on APP, click `Share` and choose the **Hub** that you want to share.

Step 2: Click `Invite User` and select the user role from **Administrator** and **Regular User**.

Step 3: Enter the **Email** address of the user you want to share with.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221234908316.png" width="700" />
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221235422588.png" width="700" />
</div>

Step 4: The invited user need to enter `Message` page, and switch to `Share `on the top

Step 5: The invitation will be notified here, and click `Agree` to finish the invitation.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222000016732.png" width="200" />
</div>

#### Configure App User:

1. Once the sharing process has been successfully finished, enter **`User Management`** (Hub → "**Settings**" → "**User Management**"), the new user will be shown in the list.
2. Click the "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" button on the right side of the user to configure user authorities.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222000555050.png" width="700" />
</div>

![](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221234420015.png)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - The detailed definition of notification **Alarm**, **Malfunction**, **Event**, **Operation**, will be elaborated in [Charter 7. Notification Management](#charter-7.-notification-management) later.
> - SMS and Phone Call are only supported by Home Security Hub **Station**, not for **Pico**.
> - For each notification, the Hub makes Phone Call and SMS to every user only once no matter successful or not.

### 5.3.2 Local User Management

#### Add a Local User

Step 1: Enter `Settings` page of Hub, click `User Management`.

Step 2: Switch to `Local User` on the top page.

Step 3: Click `Add User` and set a `Nickname` for the user, press `Done` to finish the operation.  

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222001747988.png" width="700" />
</div>

After adding successfully, click the "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" button on the right side of the user to configuration.

**Local User Setting Explanation**

| Setting              | Explanation                               |
| -------------------- | ----------------------------------------- |
| **PIN Code**         | Set a code for the user to operate keypad |
| **Keyfob**           | Assign a keyfob for the user              |
| **Linked Room**      | Assign room permissions for the user      |
| **User Information** | Modify profile and nickname               |
| **Delete User**      | Delete user                               |

---



<br />

# Charter 6. Scene Management

## 6.1 Security Scene



### 6.1.1 Default Arming / Disarming

#### Arm Stay



#### Arm Away



#### Disarm





### 6.1.2 Custom Arming



<br />

## 6.2 Custom Scene

### 6.2.1 Create a Custom Scene



### 6.2.2 Add a Trigger Condition



### 6.2.3 Add an Execution Task



---



<br />

# Charter 7. Notification Management

## 7.1 Notification Type

In `Message` page, the received messages are classified into `Device` and `Share` in general, on the top of the page, by clicking to switch the contents.

### 7.1.1 Device

It means the notifications are generated if status changed in system devices. It has 5 types, which are listed in below form, each type has an icon design to distinguish.

|  **Notification Types**  |                           **Icon**                           | **Definition**                                               |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|        **Alarm**         | ![alarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/alarm.png) | All the alarm notifications in system, such as Intrusion alarm, Panic alarm, Fire alarm, and more |
|     **Malfunction**      | ![Malfunction](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Malfunction.png) | All the system fault notifications, such as Low battery, External power failure, Cellular lost, and more |
| **Malfunction Restored** | ![mal restore](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/mal%20restore.png) | All the system faults recovered to normal status             |
|        **Event**         | ![event](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/event.png) | Regular notifications, such as Hub is online / offline / updating, Scene auto-triggered, and more |
|      **Operation**       | ![Operation](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Operation.png) | System operation, such as Arm/Disarm, Scene manually-triggered, Automation device manually-triggered, Peripherals enable/disable |

### 7.1.2 Share

It means the notifications are generated by user invitation process. Only when someone is sharing Hub to you, notifications will be received and agreed there.



> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *APP can only save notifications from latest two weeks, history over two weeks will be cleared.*

<br />

## 7.2 Notification Setting

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222002949593.png" width="300" />
</div>

- ![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png): Enable / Disable whether to receive notifications from App;
- ![image-20231222003205182](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003205182.png): Quickly select the notifications you prefer to view;
- ![image-20231222003247445](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003247445.png): Set notifications as `All Read` or `Clear`.

---



<br />

# Charter 8. Installation Instruction

## 8.1 Hub Installation

### 8.1.1 Noise Level

Ensuring the presence of acceptable wireless noise levels, you can check the data in app settings page. Path: Details of the Hub → `>` → `Wireless Noise Level`.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003432932.png" width="250" />
</div>

### 8.1.2 Considerations

**DO NOT** place the hub:

- Outside the premises (outdoors).
- Nearby or inside any metal objects or mirrors causing attenuation and screening of the signal.
- In places with high radio interference level.
- Close to radio interference sources: less than 1 meter from the router and power cables.
- Inside any premises with the temperature and humidity beyond the range of permissible limits. The recommended temperature is -10~45 Celsius, humidity between 30%~70%.

<br />

## 8.2 Peripheral Installation

1. Check the detector’s installation position (indoor/outdoor)
2. Check the battery. Please navagate to device's status to check the battery level in app, you will receive a message when battery is low.
3. Check the LED indicator. The Hub's "**Fault Indicator**" will turn on when the detector's battery level is low.
4. Double check the Signal Strength.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *You can turn to [Charter 4 Peripheral Setting](#charter-4-peripheral-setting) to learn how to determine the installation position with signal strength test.*

<br />For detailed information, please check the User Guide or please visit the link blow: [Roombanker YouTube Channel](https://www.youtube.com/@Roombanker)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *Peripherals installation is recommended to pass the Walk Test. For the operation methods, please refer to [Charter 2.5.5 System Maintenance](#Charter-2.5.5-maintenance) for details.*

---



<br />

# Charter 9. Maintenance

## 9.1 Battery Replacement

- **Identify the Battery Type**:

  Determine the type of battery your device uses (e.g, alkaline) and ensure you have a replacement battery of the same type.

- **Locate the Battery Compartment**:

  Find the battery compartment on your device. In many cases, it's on the back or underside of the device. Make sure you have turned off the device if needed.

- **Remove the Old Battery**:

  Follow the manufacturer's instructions to safely remove the old battery. This may involve sliding a latch, unscrewing a cover, or using a tool.

- **Dispose of Old Battery Properly**:

  If the old battery is rechargeable or contains hazardous materials, dispose of it according to local regulations. Many communities have specific battery recycling programs.

- **Check Battery Orientation**:

  Pay attention to the correct orientation of the battery. There are usually markings or diagrams in the battery compartment indicating the proper placement.

- **Insert the New Battery**:

  Carefully insert the new battery into the compartment, ensuring it is correctly oriented.

- **Secure the Battery Compartment**:

  Close or secure the battery compartment according to the device's design. Follow any locking or sealing mechanisms specified by the manufacturer.

- **Power On and Test**:

  Turn on the device and check that it operates correctly with the new battery.

- **Charge if Necessary**:

  If the battery is rechargeable, ensure it is fully charged before using the device.

