---
description: This is the user manual of how to use Roombanker's security alarm and home auotmation system, including how to register, configure and operate devices and RB Link app, how to install devices, etc. 
title: Roombanker Security Alarm & Home Automation System User Manual
keywords:
- Security Alarm & Home Automation System User Manual
tags:
- User Manual

---


# Roombanker User Manual



<div style={{textAlign: 'center'}}>
<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '10px 40px',cursor:'pointer', textDecoration: 'none', borderRadius: '1px' }}>Download User Manual</button>
</div>

<br />

<center>
    Last update: Aug 13th, 2024.
</center>


<br />
<br />

**Revision History**

| Rev.  | Date       | Update Description                                           |
| ----- | ---------- | ------------------------------------------------------------ |
| 1.0   | 2024-01-24 | 1. New version release                                       |
| 1.0.1 | 2024-03-18 | 1. Bug fixed                                                 |
| 1.0.2 | 2024-05-14 | **New function：** <br />1. Daylight Saving Time function<br />2. SIM Card PIN Code unlock function<br />3. Temperature and humidity sensor Fahrenheit and Celsius switching function<br />4. German language supported<br /> **Optimization:** <br />1. PIR Sensor, Siren function optimized<br />2. Bug fixed |
| 1.1.0 | 2024-08-13 | **New function：** <br />1. Added DC 09 protocol alarm reporting.<br />2. Added relay pulse control mode. <br />3. Added Wi-Fi network modification capability. <br />4. Added hub IP address display. <br />5. Added "Hardware Version" to the device's basic information page. <br />6. Added hub fault status and fault list viewing. <br />7. Added status light for outdoor siren operation. <br />8. Added RBF smoke detector. <br />9. Added keypad unlock feature. <br />10. Added video guide for batch adding peripherals.<br /> **Optimization:** <br />1. Optimized issue where peripherals appeared online after going offline.<br />2. Optimized peripheral alarm icons to differentiate between tamper, intrusion, water leak, emergency, smoke, fire, and medical alarms.<br /> |
| 1.1.1 | 2024-09-27 | **New function：** <br />1. Added Turkish language.<br /> **Optimization:** <br /> Bug fixed. |
| 1.1.2 | 2025-01-20 | **New function：** <br />1. Independent sensor delay config for away - defense.<br />2.LTE external antenna switch.<br /> 3.APP emergency alarm.<br /> 4.Peripheral device firmware update. <br />**Optimization:** <br />  Bug fixed. |
| 1.1.3 | 2024-03-06 | **Optimization:** <br /> 1. Added outdoor siren status light config.<br /> 2. Added PIR Sensor sensitivity config.<br />3. Optimized user experience.<br />|
| 1.2.0 | 2025-07-23 | **New function:** <br />1.Added Outdoor Camera and Indoor Camera.<br />2.Added Support Romanian, Macedonian, Croatian, Greek and Dutch.<br /> 3.It supports the super administrator to transfer their own user permissions to other users.<br />4.Add settings for important alarm message reminders.<br /> **Optimization:** <br />1.Custom arming/scene allows users to upload local photos by themselves.<br />2.Optimize the arming and disarming prompt information.<br />3.Optimized user experience.<br />|


## Overview

### Purpose of the Manual

The main purpose of the manual contains **3** parts:

● To introduce the features and specifications of Roombanker Security Product System

● To introduce how to register, configure and operate the devices from [RB Link APP](https://www.roombanker.com/software/rblink/)

● To introduce the installation and function test method of the whole system



### Scope of the Manual

All the functions described in the manual are based on the products and version showing in the form below. You may find some functions cannot be achieved if your devices are not the latest version, please check your devices version and update to the latest from APP if so.

**Device name and latest available version**

|         **Device**          | **Version** |                             Spec                             |                             QSG                              |          **Device**          | **Version** |                             Spec                             |                             QSG                              |
| :-------------------------: | :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------: | :---------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  Home Security Hub (R2)  |   v1.0.0    | [View](https://wiki.roombanker.com/hub/home-security-hub-pico/specification) | [View](https://wiki.roombanker.com/hub/home-security-hub-pico/quick-start-guide) |          PIR Sensor          |   v1.0.0    | [View](https://wiki.roombanker.com/motion-sensor/pir-sensor/specification) | [View](https://wiki.roombanker.com/motion-sensor/pir-sensor/quick-start-guide) |
| Home Security Hub (R2 PRO) |   v1.0.0    | [View](https://wiki.roombanker.com/hub/home-security-hub-station/specification) | [View](https://wiki.roombanker.com/hub/home-security-hub-station/quick-start-guide) |         Panic Button         |   v1.0.0    | [View](https://wiki.roombanker.com/panic-button/panic-button/specification) | [View](https://wiki.roombanker.com/panic-button/panic-button/quick-start-guide) |
|           Keypad            |   v1.0.0    | [View](https://wiki.roombanker.com/control-device/keypad/specification) | [View](https://wiki.roombanker.com/control-device/keypad/quick-start-guide) |     Door Magnetic Sensor     |   v1.0.0    | [View](https://wiki.roombanker.com/door-sensor/door-magnetic-sensor/specification) | [View](https://wiki.roombanker.com/door-sensor/door-magnetic-sensor/quick-start-guide) |
|            Relay            |   v1.0.0    | [View](https://wiki.roombanker.com/automation-device/relay/specification) | [View](https://wiki.roombanker.com/automation-device/relay/quick-start-guide) |     Water Leak Detector      |   v1.0.0    | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/water-leak-detector/specification) | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/water-leak-detector/quick-start-guide) |
|         Wall Switch         |   v1.0.0    | [View](https://wiki.roombanker.com/automation-device/wall-switch/specification) | [View](https://wiki.roombanker.com/automation-device/wall-switch/quick-start-guide) | Temperature Humidity Monitor |   v1.0.0    | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/temperature-humidity-monitor/specification) | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/temperature-humidity-monitor/quick-start-guide) |
|        Indoor Siren         |   v1.0.0    | [View](https://wiki.roombanker.com/alarm-siren/indoor-siren/specification) | [View](https://wiki.roombanker.com/alarm-siren/indoor-siren/quick-start-guide) |        Smoke Detector        |   v1.0.0    | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/smoke-sensor/specification) | [View](https://wiki.roombanker.com/environmental-monitoring-sensor/smoke-sensor/quick-start-guide) |
|        Outdoor Siren        |   v1.0.0    | [View](https://wiki.roombanker.com/alarm-siren/outdoor-siren/specification) | [View](https://wiki.roombanker.com/alarm-siren/outdoor-siren/quick-start-guide) |        RB Link (App)         |   v1.0.0    |                              /                               |                              /                               |
|           Keyfob            |   v0.0.8    | [View](https://wiki.roombanker.com/control-device/keyfob/specification) | [View](https://wiki.roombanker.com/control-device/keyfob/quick-start-guide) |        Indoor IPC                      |  v1.0.0           |            [View](https://wiki.roombanker.com/video-alarm-device/indoor-ipc/specification) | [View](https://wiki.roombanker.com/video-alarm-device/indoor-ipc/quick-start-guide)   |
|       Smart Plug (US)       |   v1.0.0    | [View](https://wiki.roombanker.com/automation-device/smart-plug-us/specification) | [View](https://wiki.roombanker.com/automation-device/smart-plug-us/quick-start-guide) |   Outdoor IPC      |    v1.0.0    |                 [View](https://wiki.roombanker.com/video-alarm-device/outdoor-ipc/specification) | [View](https://wiki.roombanker.com/video-alarm-device/outdoor-ipc/quick-start-guide) |
|       Smart Plug (EU)       |   v1.0.0    | [View](https://wiki.roombanker.com/automation-device/smart-plug-eu/specification) | [View](https://wiki.roombanker.com/automation-device/smart-plug-eu/quick-start-guide) |   Outdoor PIR Sensor(IR+MW)  |  v1.0.0  |  [View](https://wiki.roombanker.com/motion-sensor/outdoor-pir-sensor/specification) | [View](https://wiki.roombanker.com/motion-sensor/outdoor-pir-sensor/quick-start-guide) |
|       Smart Plug (UK)       |   v1.0.0    | [View](https://wiki.roombanker.com/automation-device/smart-plug-uk/specification) | [View](https://wiki.roombanker.com/automation-device/smart-plug-uk/quick-start-guide) |                              |          |                                                              |                                                              |

<br />

### Symbol Conventions

| **Symbol**                                                   | **Description**                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![Danger](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Danger.png)**Danger** | Indicates a hazardous situation which, if not avoided, will or could result in death or serious injury. |
| ![caution](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/caution.png)**Caution** | Indicates a hazardous situation which, if not avoided, will or could result in equipment damage or performance degradation. |
| ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** | Provides additional information to emphasize or supplement important points of the main text. |

---



<br />

## Charter 1. System Introduction

###  1.1 Overview of the System

● **Product Positioning:** 

Roombanker focus on the smart security solutions centered around [wireless intrusion alarm system](https://www.roombanker.com/solution/intrusion-detection/), and extended business to a multitude of applications such as [Energy Management](https://www.roombanker.com/solution/energy-management/), [Environmental Safety](https://www.roombanker.com/solution/indoor-environmental-safety/), [Home Automation](https://www.roombanker.com/solution/home-automation/). All of these applications can be conveniently managed via a one-stop mobile app.

<br />

● **Application Scenario:** 

Roombanker offers security solutions to Residential and SMB users, such as [Apartment](https://www.roombanker.com/solution/smart-apartment/), [House & Villa](https://www.roombanker.com/solution/smart-house/), [Small Shop](https://www.roombanker.com/solution/smart-shops/), Office Building, Motel, and more.

<br />

● **System Topology:** 

It has four parts to consist of the whole system, which are Peripherals, Hub, Roombanker Cloud, RB Link APP.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Topology.png" width="720" />
</div>




● **Working Principle:** 

The [Home Security Hub](https://www.roombanker.com/products/smart-hub/) is the brain of the whole system, it communicates with peripherals via **RBF** / **Zigbee** wireless protocol. 

Once an alarm occurred, Hub reports the alarm to cloud via **LAN** / **Wi-Fi** / **4G**, activates the sirens within 0.5 seconds, and notifies the users via APP. Meanwhile, if the users operate the system, such as disarm, Hub will turn siren off and disarm all sensors.

<br />

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note**
>
> [**RBF**](https://www.roombanker.com/technology/rbf-technology/) is a self-developed encrypted wireless protocol by Roombanker, aim to enhance the communication between devices, the transmission range is up to **3,500m** in open area. It contains advanced technologies design, such as TDMA, Frequency Hopping, Power Adjustment, Multi-Band Transmission with Low Power, to guarantee a stable, secure, highly efficient wireless communication.

<br />

### 1.2 System Key Features

● Ultra-long range, reliable transmission

● Reliable alarm protection, day and night

● Multi-mode arming/disarming

● Instant alarm and real-time notification

● Manage smart devices with just one APP

● Esay installation & Easy DIY

<br />

### 1.3 Spec of Hub

Home security Hub has two different models, called [**R2 PRO**](https://wiki.roombanker.com/hub/home-security-hub-station/specification) and [**R2**](https://wiki.roombanker.com/hub/home-security-hub-pico/specification), below form describes the brief comparison between two models.

<table class="center">
  <thead>
    <tr>
      <th>Specifications</th>
      <th>Home Hub (R2)</th>
      <th>Home Hub (R2 PRO)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Transmission Technology</td>
      <td>RBF</td>
      <td>RBF</td>
    </tr>
    <tr>
      <td>Transmission Method</td>
      <td colspan="2" style={{textAlign: 'center'}}>Two-way wireless (RBF)</td>    
    </tr>
    <tr>
      <td>Transmission Frequency</td>
      <td colspan="2" style={{textAlign: 'center'}}>868/915MHz (RBF)</td>
    </tr>
    <tr>
      <td>Transmission Security</td>
      <td colspan="2" style={{textAlign: 'center'}}>AES128 Encryption (RBF)</td>
    </tr>
    <tr>
      <td>Peripherals Connected</td>
      <td>Up to 64</td>
      <td>Up to 128</td>
    </tr>
    <tr>
      <td>Users</td>
      <td colspan="2" style={{textAlign: 'center'}}>1 Super Admin+4 Admin+32 App Users+32 Local Users</td>
    </tr>
    <tr>
      <td>Cellular</td>
      <td>/</td>
      <td>1 SIM (4G)</td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colspan="2" style={{textAlign: 'center'}}>2.4G，802.11 b/g/n</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colspan="2" style={{textAlign: 'center'}}>1 x RJ45, 10/100Mbps</td>
    </tr>
    <tr>
      <td>Firmware Upgrade</td>
      <td colspan="2" style={{textAlign: 'center'}}>OTA via APP</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td colspan="2" style={{textAlign: 'center'}}>Type-C, 5VDC 2A</td>
    </tr>
    <tr>
      <td>Battery</td>
      <td>/</td>
      <td>2500mAh 18650 battery</td>
    </tr>
    <tr>
      <td>Backup time</td>
      <td>/</td>
      <td>Up to 8h power backup</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>260g</td>
      <td>320g</td>
    </tr>
    <tr>
      <td>Operation Temperature</td>
      <td colspan="2" style={{textAlign: 'center'}}>-10°C ~ +45°C</td>
    </tr>
    <tr>
      <td>Dimension (WxHxD)</td>
      <td colspan="2" style={{textAlign: 'center'}}>150mm x 150mm x 37mm</td>
    </tr>
  </tbody>
  </table>




---



<br />

## Charter 2. Start Up Hub

### 2.1 App Installation

1. Scan the QR code below or search "RB Link" in **Google Play** or **App Store** to download and install the App.

   <div align="center">
     <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/image-20231221181603900.png" width="200" />
   </div>

2. Register and log in to your account (with email) by following the instructions in the app.

   > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : *as of now, e-mail is the only supported method for account registration*

<br />

### 2.2 Add Home Security Hub

1. Insert the charging cable into the home security hub and turn on the power switch. Wait a moment until the center indicator starts flashing green continuously.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Cloud%20Indicator%20-%20ON(1).jpg" width="300" />
</div>


> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : 
>
> - *The Home Security Hub `R2` does not have an on/off switch, so it starts automatically when powered on*
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

### 2.3 Home Page Display

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221194703486.png" width="300" />
</div>


1. Add the hub by scanning the QR code.
2. Click to enter the management page of the hub.
3. Quick Arming / Disarming.
4. Custom scenes display area.
5. Peripherals display area.

<br />

### 2.4 Hub Status Introduction

#### 2.4.1 Hub icons

Icons display some of the Hub status.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808151151516.png" width="300" />
</div>



|                             Icon                             | Value                                                        |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| ![Wi-Fi](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Wi-Fi.png) | The icon indicates that the hub is currently connected to the cloud server via Wi-Fi. |
| ![Ethernet](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Ethernet.png) | The icon indicates that the hub is currently connected to the cloud server via Ethernet. |
| ![4G](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/4G.png) | The icon indicates that the hub is currently connected to the cloud server via Cellular Network. |
| <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808150719318.png" width="28" /> | This icon indicates an issue with the system or peripherals. Tap for details. |
| ![Battery Level](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Battery%20Level.png) | Lithium Battery Level                                        |
| ![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/room.png) | Room management. <br />*For more information, please turn to [Charter 3. Room Management](#charter-3-room-management).* |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *When multiple networking methods are available at the same time, the priority is as follows:* *`Ethernet` > `Wi-Fi` > `Cellular Network`.* *It will only show the icon of the networking method that is currently in use.*

#### 2.4.2 Hub status

Hub states can be viewed in the RB Link (App).



<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221201418121.png" width="250" />
</div>



|       **Parameter**        | **Meaning**                                                  |
| :------------------------: | ------------------------------------------------------------ |
|      Associated scene      | The number of scenes associated with Hub                     |
|        Power Supply        | The current status of the hub's power supply<br />**Connected** - the hub is connected to power supply<br />**Disconnected** - no power supply is available |
|          Ethernet          | Internet connection status of the hub via Ethernet:<br />**Connected** - The hub can connect to the cloud via Ethernet<br />**Disconnected** - The hub cannot connect to cloud via Ethernet |
|           Wi-Fi            | Internet connection status of the hub via Wi-Fi，tap here to access Wi-Fi settings.:<br />![Wi-Fi](https://dusunprj.oss-us-west-1.aliyuncs.com/Wi-Fi.png)- The hub can connect to cloud via Wi-Fi<br />![Wifi lost](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Wifi%20lost.png)- The hub cannot connect to cloud via Wi-Fi |
|       Mobile Network       | The hub connection status to the mobile Internet:<br />**Connected** - The hub can connect to the cloud via Cellular Network.<br />**Disconnected** - The hub cannot connect to cloud via Cellular Network |
|       Battery Status       | Battery level of the device                                  |
|         Lid Status         | Status of the tamper that responds to hub dismantling:<br />**Normal** - The hub is installed on the back panel<br />**Triggered** - The hub is removed from back panel |
| Wireless Noise Level (dBm) | The surrounding environment will affect the noise level of hub. lt is recommended that you install an environment where the noise level is in the range of `-128 `~ `-95` dBm. |



### 2.5 Hub Setting

You can click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)"  on the top right corner of the hub to configure parameters.

#### 2.5.1 Basic Information

| **Parameter**  | **Meaning**                                                  |
| -------------- | ------------------------------------------------------------ |
| Device name    | Click on the device name and enter the a nickname if it's in need. |
| Device model   | Display the device model.                                    |
| IP Address     | Display the IP address of the device.                        |
| MAC Address    | Display the MAC address of the device.                       |
| Serial Number  | Display the serial number of the device.                     |
| Version Number | The current firmware version of the device is displayed here. If a new version is available, you can simply click to upgrade via OTA. |

#### 2.5.2 User Management

Please turn to [Charter 5. User Management](#charter-5-user-management) for more details about user management.

#### 2.5.3 System

- **Time Zone**

  Click "**>**" and then select your time zone, then the time will be updated automatically.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/xialingshi.png" width="300" />
</div>



 - **DST**

  Click"DST", you can enable or disable Daylight Saving Time, set start and end times, and save the settings, the time will update accordingly.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/xinlingshipeizhi.png" width="300" />
</div>

* **Wi-Fi**

Tap to reconfigure Wi-Fi.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808143131665.png" width="300" />
</div>


* **Device Language**

After Setting the language, SMS will be displayed in this language.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808142042615.png" width="300" />
</div>



- **Cellular Network**

  - **Username**, **Password** and **APN** - After inserting the SIM card, the Hub automatically obtains the necessary information and connects to the network. If you are unable to connect, please contact your telecom operator to obtain these information and perform manual configuration.

    <div align="center">
      <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240517160138035.png" width="300" />
    </div>

  - **SIM PIN** -  If the system prompts that the SIM PIN is not configured,  enter the SIM PIN to use the SIM card. If your SIM card is locked, please try to contact your telecom operator to unlock it.

    <div align="center">
      <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240517172955973.png" width="300" />
    </div>

  - **Used Data (This month)** - Show current data usage.

  - **Monthly data allowance** - You can set a data usage limit here, and the App will send a notification when that limit is exceeded.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Screenshot_2023-12-22-16-01-16-319_com.example.iot_app.png" width="300" />
</div>





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



#### 2.5.4 Communication

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808103558177.png" width="300" />
</div>


* **Hub offline timeout**

During this period, if your Hub is frequently online and offline, you will not receive any offline notifications. Due to delay or status synchronization, the delay time may be different.

* **Alarm Receiving Center**

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808104537338.png" width="300" />
</div>


Once you subscribe to the Alarm Receiving Center (ARC) service, your installer or the ARC will provide you with the necessary information, as shown in the image. After entering and saving this information, your ARC service will be activated. Any alarm triggered in your home will be immediately reported to the ARC.

| **Parameter**     | **Meaning**                                                  |
| ----------------- | ------------------------------------------------------------ |
| Protocol  Type    | SIA or CID                                                   |
| Main  Address     | Primary IP Address & Port: (Required)                        |
| Backup  Address   | Secondary IP Address & Port: (Optional)                      |
| Transmission Mode | TCP or UDP                                                   |
| Ping Interval     | Heartbeat Interval: (Optional, configurable if enabled)      |
| Account Number    | Assigned by ARC                                              |
| Encryption        | AES-128, AES-192, or AES-256 with corresponding key(Optional) |



#### 2.5.5 Maintenance

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

#### 2.5.6 User Guide

You can click to view the Quick Start Guide document of the Hub ([R2](https://wiki.roombanker.com/hub/home-security-hub-pico/quick-start-guide) / [R2 PRO](https://wiki.roombanker.com/hub/home-security-hub-station/quick-start-guide)).

---



<br />

## Charter 3. Room Management

● **Definition of Room:** the area where the peripheral is installed in house.

● **Function of Room:** allow each peripheral to be assigned to just one room. Admins can assign management permissions to different users on different rooms. 

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Room%20management.png" width="500" />
</div>





> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *The above recommendations are for reference only and may vary depending on the specific layout and type of home. Adjustments to the room division and hub or peripherals placement may be necessary to suit your specific needs.*

### 3.1 Create a room

Click "![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/room.png)" on the management page of Hub to view your rooms.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221222433259.png" width="300" />
</div>


Click `Create a New Room` to add a new room, you can fill in the room name by yourself or choose one of the recommended name generated by app.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *One hub can support up to 64 rooms.*

### 3.2 Rename a room

Click a room whose name you want to modify, then you can edit its name by yourself.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221223150842.png" width="300" />
</div>



### 3.3 Delete a room

Deleting a room is a snap. Just swipe left on the room in the list and click `Delete`.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Delete%20a%20room.png" width="300" />
</div>


> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *Make sure to remove any devices from the room before deleting it.*

### 3.4 View Peripherals in a specific room

In the Hub management page, click on a specific room to view all the associated peripherals.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/peripheral%20list%20in%20room.png" width="250" />
</div>



---



<br />

## Charter 4. Peripheral Setting



### 4.1. Adding peripherals

Home Security System supports 2 types of wireless peripheral adding:

● **By QR Code:** adding peripherals `one by one`.

● **By Enrollment Mode:** adding multiple peripherals `in bulk`.

#### Option 1: Adding via QR Code

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

#### Option 2: Adding via Enrollment Mode

To batch add devices, tap "Add Peripheral" on the home page, follow the video instructions to put your devices into enrollment mode, and they will be automatically added to the App. 

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/page_1.jpg" width="600" />
</div>





> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - All the rest devices except Wall Switch are recommended to use "Adding via Enrollment Mode". 
> - Keyfob needs to be assigned to a user after enrolled.
> - Keypad needs to be set which rooms can be controlled after enrolled.

<br />

### 4.2 Peripheral Icons

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

### 4.3 PIR Sensor

**You can click [Spec](https://wiki.roombanker.com/motion-sensor/pir-sensor/specification) and [QSG](https://wiki.roombanker.com/motion-sensor/pir-sensor/quick-start-guide)* to check more information about [PIR sensors](https://www.roombanker.com/products/pir-sensor/).

#### 4.3.1 Appearance

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

#### 4.3.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20State.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this PIR. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**     |                         Arm / Disarm                         | Shows the arm status of the PIR. When it’s armed, the PIR could detect motion events and then report alarm to Hub immediately.<br />**The PIR will enter sleep mode for energy-saving.* |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the PIR is triggered.<br />**Alarm will only be triggered when PIR is armed.* |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of PIR is open or not.                 |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the PIR and the hub.       |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the PIR and the Hub.<br />**The PIR will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of PIR. <br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.3.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-pir/outdoor-pir-11.png" width="250" />
</div>


|      **Parameter**        |                          **Value**                           | **Meaning**                                                  |
| :-----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**    |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc. <br />And you can also edit the device name here by yourself. |
|       **Add Room**        | ![image-20231221233352230](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the PIR to.<br />**When linked to a specific room, the PIR will be displayed on the product list of the room, and the PIR could begin for detecting when the room is armed.* |
|       **Find Me**         | ![PIR find me](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20find%20me.png) | A function that used to find your PIR among numerous devices. When you enable this function, the indicator in PIR will flash green to help you find the target device quickly. |
| **Signal Strength Test**  | ![image-20231221233412208](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233412208.png) | A function that used to check the signal strength between PIR and hub at the tested place, which is designed to help you choose the right place for installation. When you enable this function, you can check the signal strength by watching the indicator in PIR and the feedback in app. |
|  **Installation Test**    | ![PIR Test](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20Test.png) | A function that used to test whether the PIR is installed properly. When you enable this function, you can walk in the room to test if the PIR can detect and trigger an alarm properly. The indicator will flash red when it detects successfully. |
| **Tamper detection**      |                            ON / OFF                         | When the tamper detection is enabled, if the tamper switch is triggered while the hub is armed, an alarm will be triggered. <br /> PIR must install the cardan bracket to make "Tamper Detection" effective. |
| **Detection Sensitivity** |                    High / Medium / Low                      | Adjust sensitivity per actual installation environment to cut false & missed alarms and boost detection accuracy. |
| **Firmware Upgrade**      |          | The device supports firmware upgrade functionality and can be updated remotely over the air. The system periodically checks for version updates, allowing users to download and install firmware updates via the mobile app when the Hub is connected to the internet. |
|    **Disable Device**     |                           ON / OFF                           | If this button is ON, the alarm and malfunctions generated by this PIR will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if it’s defective. Before turning on this function, please ensure that you are aware of the situation to avoid possible personal injury or property damage that may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**   |                           ON / OF                            | When enabled, the PIR will show up on homepage so that you can operate quickly. |
|      **User Guide**       |                              /                               | Click to check the user guide document of PIR.               |
|    **Delete Device**      |                              /                               | Delete the PIR from your hub.                                |

<br />

### 4.4 Door Magnetic Sensor

**You can click [Spec](https://wiki.roombanker.com/door-sensor/door-magnetic-sensor/specification) and [QSG](https://wiki.roombanker.com/door-sensor/door-magnetic-sensor/quick-start-guide)* to check more information about [Door Magnetic Sensor](https://www.roombanker.com/products/door-magnetic-sensor/).

#### 4.4.1 Appearance

![Magnetic](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Magnetic.png)

| **Appearance**                    | **Description**                                              |
| --------------------------------- | ------------------------------------------------------------ |
| **LED Indicator**                 | Red / Green / Orange<br />**Used to indicate alarm status, signal strength status, and Find Me status.* |
| **Register Button**               | Press and hold for 5s to add the Door Magnetic Sensor to the Hub.<br />**Register Button is only used for re-adding or connecting the peripheral to another hub.* |
| **Tamper Switch / Tamper Button** | Used to detect the tamper alarm status of the lid.           |

#### 4.4.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/MC%20state.jpg" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Door Magnetic Sensor. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**     |                         Arm / Disarm                         | Shows the arm status of the Door Magnetic Sensor. When it’s armed, the Door Magnetic Sensor could detect open/close events and then report alarm to Hub immediately. |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the Door Magnetic Sensor is triggered.         |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the Door Magnetic Sensor’s lid is opened or not. |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Door Magnetic Sensor and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Door Magnetic Sensor and the Hub.<br />**The Door Magnetic Sensor will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Door Magnetic Sensor. <br />**If the battery level is low, the icon will turn red and you’ll receive a malfunction notification in App.* |

#### 4.4.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233126628.png" width="250" />
</div>



|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.And you can also edit the device name here by yourself. |
|   **Room Belongs to**    | ![image-20231222100954161](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222100954161.png) | You can select one of the rooms created before and then link the Door Magnetic Sensor to.<br />**When linked to a specific room, the Door Magnetic Sensor will be displayed on the product list of the room, and the alarm will be triggered only when the room is armed.* |
|       **Find Me**        | ![MC Find me](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/MC%20Find%20me.png) | A function that used to find your Door Magnetic Sensor among numerous devices.<br />When you enable this function, the indicator in Door Magnetic Sensor will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![image-20231222101005495](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222101005495.png) | A function that used to check the signal strength between Door Magnetic Sensor and hub at the tested place, which is designed to help you choose the right place for installation.<br />When you enable this function, you can check the signal strength by watching the indicators in Door Magnetic Sensor and the feedback in app. |
|  **Installation Test**   | ![MC Test](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/MC%20Test.png) | A function that used to test whether the Door Magnetic Sensor is installed properly.<br />When you enable this function, you can open the door or window to test if the Door Magnetic Sensor can detect and trigger an alarm properly. The indicator will flash red when it detects successfully. |
|    **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm  and malfunctions generated by this Door Magnetic Sensor will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if  it’s defective. Before turning on this function, please ensure that you are  aware of the situation to avoid possible personal injury or property damage that  may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Door Magnetic Sensor will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Door Magnetic Sensor. |
|    **Delete Device**     |                              /                               | Delete the Door Magnetic Sensor from your hub.               |

<br />

### 4.5 Panic Button

**You can click [Spec](http://localhost:3000/panic-button/panic-button/specification) and [QSG](http://localhost:3000/panic-button/panic-button/quick-start-guide)* to check more information about [Panic Button](https://www.roombanker.com/products/panic-button/).

#### 4.5.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222102753563.png" width="400" />
</div>


| **Appearance** | **Description**                                              |
| -------------- | ------------------------------------------------------------ |
| LED Indicator  | Red / Green / Orange<br />**Used to indicate alarm status, signal strength status, and Find Me status.* |
| Alarm Button   | 1.     Press to trigger panic alarm.<br />2.     Press and hold for 10s to enter paring mode.<br />**Paring mode is only used for re-adding or connecting the Panic Button to another Hub.* |

#### 4.5.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20240109095343303.png" width="250" />
</div>



|    **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene** |                            0 ~ 64                            | Shows the number of custom scenes associated with this Panic Button. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**    |                       24 Hours arming                        | Panic Button is functional for 24/7, no matter the system is armed or not. |
|   **Alarm Status**   |                        Normal / Alarm                        | Shows whether the Panic Button is pressed or not.            |
|  **Battery Status**  | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Panic Button.                     |



#### 4.5.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222103430998.png" width="250" />
</div>


|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|   **Room Belongs to**    | ![image-20231221233352230](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the Panic Button to.<br />**When linked to a specific room, the Panic Button will be displayed on the product list of the room.* |
|       **Find Me**        | ![EB Find me-1](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20240109095935738.png) | A function that used to find your Panic Button among numerous devices. <br />When you enable this function, the indicator in Panic Button will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![EN SS Test](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20240109095837811.png) | A function that used to check the signal strength between Panic Button and hub at the tested place, which is designed to help you choose the right place for installation. |
|  **Silent Panic Alarm**  |                           ON / OFF                           | When enabled, panic alarm triggered with no alarm sound from the linked siren. |
|    **Disable Device**    |                           ON / OFF                           | When enabled, the Panic Button will be disabled.             |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Panic Button will show up on homepage.     |
|      **User Guide**      |                              /                               | Click to check the user guide document of Panic Button.      |
|    **Delete Device**     |                              /                               | Delete the Panic Button from your hub.                       |

<br />

### 4.6 Temperature Humidity Monitor

**You can click [Spec](https://wiki.roombanker.com/environmental-monitoring-sensor/temperature-humidity-monitor/specification) and [QSG](https://wiki.roombanker.com/environmental-monitoring-sensor/temperature-humidity-monitor/quick-start-guide)* to check more information about [Temperature Humidity Monitor](https://www.roombanker.com/products/temperature-humidity-monitor/).

#### 4.6.1 Appearance

![image-20231222104606504](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222104606504.png)

| **Appearance**  | **Description**                                              |
| --------------- | ------------------------------------------------------------ |
| Register Button | Press and hold for 5s to enter paring mode.<br />*Used to add Temperature  Humidity Monitor to the hub. |
| Battery icon    | Shows the battery level of this Temperature Humidity Monitor. |
| Signal icon     | Shows the signal strength between Temperature Humidity Monitor and hub. |
| Temperature     | Shows the temperature of the installation place.             |
| Humidity        | Shows the humidity of the installation place.                |
| Hanging hole    | Used to hang the Temperature Humidity Monitor to the wall.   |
| Battery cover   | Slide to open and replace the AA batteries.                  |

#### 4.6.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222104800684.png" width="200" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Temperature&Humidity Monitor. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between Temperature&Humidity Monitor and hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Temperature&Humidity Monitor and the Hub.<br />*The Temperature *Humidity Monitor will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Temperature&Humidity Monitor.<br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.6.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/T&H%20for%20change.png" width="250" />
</div>


|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|       **Add Room**       | ![image-20231221233352230](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the Temperature Humidity Monitor to.<br />*When linked to a specific room, the Temperature Humidity Monitor will be displayed on the product list of the room.* |
|         **℃/℉**          | ![企业微信截图_1715933927967](https://dusunprj.oss-us-west-1.aliyuncs.com/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_1715933927967.png) | A function that used to toggle between Celsius and Fahrenheit displays. |
|       **Find Me**        | ![image-20231222105302699](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222105302699.png) | A function that used to find your Temperature&Humidity Monitor among numerous devices. |
| **Signal Strength Test** | ![image-20231222105319971](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222105319971.png) | A function that used to check the signal strength between Temperature Humidity Monitor and hub at the tested place, which is designed to help you choose the right place for installation. |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Temperature Humidity Monitor will show up on homepage. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Temperature Humidity Monitor. |
|    **Delete Device**     |                              /                               | Delete the Temperature Humidity Monitor from your hub.       |

<br />


### 4.7 Water Leak Detector

**You can click [Spec](https://wiki.roombanker.com/environmental-monitoring-sensor/water-leak-detector/specification) and [QSG](https://wiki.roombanker.com/environmental-monitoring-sensor/water-leak-detector/quick-start-guide)* to check more information about [Water Leak Detector](https://www.roombanker.com/products/water-leak-detector/).

#### 4.7.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222105919739.png" width="600" />
</div>


|    **Appearance**     | **Description**                                              |
| :-------------------: | ------------------------------------------------------------ |
| **LED** **Indicator** | Red / Orange / Green.<br />**Used to indicate alarm status, signal strength status, and Find Me status* |
|  **Register Button**  | Press and hold for 5s to add the Water Leak Detector to the Hub.<br />**Register Button is only used for re-adding or connecting the peripheral to another hub.* |
|       **Probe**       | Detects water leaks by detecting whether the two probes are shorted by water. |
|  **External Probe**   | Optional for expanding an additional detection point for water leaking detection. |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *After connecting the external probe, the Water Leak Detector will trigger an alarm whenever any one of the built-in probe or external probe detects water leaks.*

#### 4.7.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222110151349.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Water Leak Detector. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**     |                       24 Hours Arming                        | Water Leak Detector keeps detecting for 24/7, no matter the system is armed or disarmed. |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the Water Leak Detector is triggered.          |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Water Leak Detector and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Water Leak Detector and the Hub.<br />**The Water Leak Detector will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Water Leak Detector.<br />**If the battery level is low, the icon will turn red and you’ll receive a malfunction notification in App.* |

#### 4.7.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222110454908.png" width="250" />
</div>


|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.And you can also edit the device name here by yourself. |
|   **Room belongs to**    | ![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the Water Leak Detector to.****When linked to a specific room, the* *Water Leak Detector* *will be displayed on the product list of the room.* |
|       **Find Me**        | ![WL Find me](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/WL%20Find%20me.png) | A function that used to find your Water Leak Detecotr among numerous devices.When you enable this function, the indicator in Water Leak Detector will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![WL SS](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/WL%20SS.png) | A function that used to check the signal strength between Water Leak Detector and hub at the tested place, which is designed to help you choose the right place for installation. When you enable this function, you can check the signal strength by watching the indicator in Water Leak Detector and the feedback in app. |
|  **Installation Test**   | ![WL Test](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/WL%20Test.png) | A function that used to test whether the Water Leak Detector is installed properly.When you enable this function, you can simulate a water leaking event to test if the Water Leak Detector can detect and trigger an alarm properly. The indicator will flash red when it detects successfully. |
|    **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm and malfunctions generated by this Water Leak Detector will no longer be uploaded to the Hub and App.**It is recommended that you disable the device only if it’s defective. Before turning on this function, please ensure that you are aware of the situation to avoid possible personal injury or property damage that may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Water Leak Detector will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Water Leak Detector. |
|    **Delete Device**     |                              /                               | Delete the Water Leak Detector from your Hub.                |

<br />

### 4.8 Smoke Detector

**You can click [Spec](https://wiki.roombanker.com/environmental-monitoring-sensor/smoke-sensor/specification) and [QSG](https://wiki.roombanker.com/environmental-monitoring-sensor/smoke-sensor/quick-start-guide)* to check more information about [Smoke Detector](https://www.roombanker.com/products/smoke-detector/).

#### 4.8.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222111015458.png" width="500" />
</div>


|         **Appearance**          | **Description**                                              |
| :-----------------------------: | ------------------------------------------------------------ |
| **Mute / Self-checking Button** | Press and hold for 5s to add the Smoke Detector to the Hub. <br />Press and hold for less than 5s for self-checking. |
|      **Status Indicator**       | Red / Green.<br />**Used to indicate alarm status and self-checking status.* |
|       **Alignment Mark**        | Used to check whether the device is installed properly.<br />**If the semicircles on the device and mounting base are aligned to form a circle, the product is installed properly* |
|      **Mounting** **Base**      | Can be installed on the ceiling with screws or 3M sticker.   |

#### 4.8.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222111233339.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Smoke Detector. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**     |                       24 Hours Arming                        | Smoke Detector keeps detecting for 24/7, no matter the system is armed or disarmed. |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows if there is alarm detected by Smoke Detector.          |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of Smoke Detector is open or not.      |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Smoke Detector and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Smoke Detector and the Hub.<br />**The Smoke Detector will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Smoke Detector.<br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.8.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

|      **Parameter**      |                          **Value**                           | **Meaning**                                                  |
| :---------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**  |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.And you can also edit the device name here by yourself. |
|   **Room belongs to**   | ![room](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the Smoke Detector to.<br />**When linked to a specific room, the device will be displayed on the product list of the room.* |
|   **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm  and malfunctions generated by this Smoke Detector will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if  it’s defective. Before turning on this function, please ensure that you are  aware of the situation to avoid possible personal injury or property damage that  may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage** |                           ON / OFF                           | When enabled, the Smoke Detector will show up on homepage so that you can operate quickly. |
|     **User Guide**      |                              /                               | Click to check the user guide document of Smoke Detector.    |
|    **Delete Device**    |                              /                               | Delete the Smoke Detector from your Hub.                     |

#### 4.8.4 Test

When the device detects smoke, it will announce alarm by buzzing and flashing with built-in indicator and buzzer, and could also trigger sirens for alerting instantly if it’s connected to Hub, and the Hub will push alarm notifications to remote terminals via App, SMS, Phone Call, etc.

| **Event**                                               | **Indicator feedback**                          | **Buzzer feedback**   |
| ------------------------------------------------------- | ----------------------------------------------- | --------------------- |
| **Alarm is triggered**                                  | Red indicator flashes                           | Buzzer beeps          |
| **Work properly**                                       | Flashes once every 50 seconds                   | /                     |
| **Battery power is low**                                | Yellow indicator flashes once every 40 seconds. | Buzzer beeps shortly  |
| **Self-checking and alarm simulating state**            | Red indicator flashes.                          | Buzzer beeps 4 times. |
| **Registration Mode** (used to connect device into Hub) | Green indicator flashes.                        | /                     |

**Alarm Test**

Press the `Mute/Self-checking` button once, then the smoke detector enters self-checking mode, the indicator flashes red and the built-in buzzer beeps 4 times.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222111925015.png" width="300" />
</div>


When alarm triggered, you can also press the Mute/self-checking button to mute the product.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *the detector will be mute for 90 seconds. During this period, the detector will not generate any audible or visual alarm. After 90s, the detector will be restored to the detection state.*

> ![caution](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/caution.png) **Caution**: In case of fire, please take proper measures immediately, such as calling the fire emergency number or using a fire extinguisher to put out of the fire. 

> ![Danger](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Danger.png) **Danger**: Ignoring the fire alarm could result in property damage, personal injury, or even death. So please make sure there is no fire before you mute the detector.

<br />

### 4.9 Indoor Siren

**You can click [Spec](https://wiki.roombanker.com/alarm-siren/indoor-siren/specification) and [QSG](https://wiki.roombanker.com/alarm-siren/indoor-siren/quick-start-guide)* to check more information about [Indoor Siren](https://www.roombanker.com/products/indoor-siren/).

#### 4.9.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222112355120.png" width="700" />
</div>


| **Appearance**               | **Description**                                              |
| ---------------------------- | ------------------------------------------------------------ |
| **Speaker Hole**             | Loudspeaker for buzzer.                                      |
| **Indicator Circle**         | Red / Orange / Green.<br />**Used to indicate alarm status, Signal Strength status, and Find Me status.* |
| **Power Interface**          | Used to power the Indoor Siren with adapter.                 |
| **Register Button**          | Press and hold for 5s to add the Indoor Siren to the Hub.<br />**Register Button is only used for re-adding or connecting the peripheral to another hub.* |
| **Tamper Switch**            | Used to detect the tamper alarm status of the lid.           |
| **Volume Adjustment Button** | Used to adjust the volume by manual.<br />*Switching among three options: 85 / 95 / 105 dB.* |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note**: It’s recommended to connect power the indoor siren with adapter all the time to keep continuously charging to ensure a timely response at all times.

#### 4.9.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222112743465.png" width="300" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Indoor Siren. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of Indoor Siren is open or not.        |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Indoor Siren and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Indoor Siren and the Hub.<br />**The Indoor Siren will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Indoor Siren.<br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.9.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113016656.png" width="250" />
</div>


|      **Parameter**       |                          **Value**                           | **Description**                                              |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|   **Room belongs to**    | ![image-20231222113612270](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113612270.png) | You can select one of the rooms created before and then link the device to.<br />**When linked to a specific room, the device will be displayed on the product list of the room.* |
|  **Siren Triggered by**  | ![image-20231222113626888](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113626888.png) | The siren can be linked with one or multiple rooms as a warning device to announce any alarm or other events with sound and strobe. |
|    **Alarm Settings**    | ![image-20231222113634913](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113634913.png) | **Buzzer**: <br />1. You can enable/disable buzzer and switch alarm volume among three levels: High (105dB) /  Medium (95dB) / Low (85dB)<br />2. Buzzer Trigger Method: You can select one or more triggers.<br />*An alarm sound will be triggered when the following events occur.* <br /><br />**Alarm Light**:<br />1. You can enable/disable alarm light manually. <br />2. Alarm Light Trigger Method: You can select one or more triggers.<br />*The siren strobe will be triggered when the following events occur.*<br /><br />**Alarm Duration**: You can set the alarm duration of siren from 1s ~ 15mins.<br />**90s by default* |
|     **Volume Test**      |                              /                               | You can use it to check if the current volume could meet your requirement. |
|       **Find Me**        | ![image-20231222113651394](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113651394.png) | A function that used to find your Indoor Siren among numerous devices. When you enable this function, the indicator in Indoor Siren will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![image-20231222113702028](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113702028.png) | A function that used to check the signal strength between the Indoor Siren and the hub at the tested place, which is designed to help you choose the right place for installation.When you enable this function, you can check the signal strength by watching the indicator in Indoor Siren and the feedback in app. |
|    **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm  and malfunctions generated by this Indoor Siren will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if  it’s defective. Before turning on this function, please ensure that you are  aware of the situation to avoid possible personal injury or property damage that  may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Indoor Siren will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Indoor Siren.      |

<br />

### 4.10 Outdoor Siren

**You can click [Spec](https://wiki.roombanker.com/alarm-siren/outdoor-siren/specification) and [QSG](https://wiki.roombanker.com/alarm-siren/outdoor-siren/quick-start-guide)* to check more information about [Outdoor Siren](https://www.roombanker.com/products/outdoor-siren/).

#### 4.10.1 Appearance

![image-20231222113846452](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113846452.png)

|     **Appearance**      | **Description**                                              |
| :---------------------: | ------------------------------------------------------------ |
|     **Solar Panel**     | Solar panel for charging the built-in lithium battery.       |
|      **Indicator**      | 3 LED indicators to announce alarm and other events.         |
|      **Lampshade**      | **There are three options available for selection when placing orders (Red / Blue / Orange).* |
|   **Register Button**   | Press and hold for 5s to add the Outdoor Siren to the Hub.<br />**Register Button is only used for re-adding or connecting the outdoor siren to another Hub.* |
| **Power Switch Button** | Used to turn ON/OFF the Outdoor Siren manually.              |
|  **12V Power Supply**   | Power supply interfaces are used for connecting 12 V DC power when it’s in need. |
|    **Tamper Button**    | Used to detect the tamper alarm status of the lid.           |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *It’s recommended to install the Outdoor Siren in the location where there is sunlight, so that the solar panels can keep charging for the built-in lithium battery intermittently, for long-lasting protection.*

#### 4.10.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222114050650.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Outdoor Siren. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Solar Panel**    | ![charging](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/charging.png) / ![uncharge](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/uncharge.png) | Shows the charging status of solar panel.<br />![charging](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/charging.png) - Charging;<br />![uncharge](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/uncharge.png)- Uncharged. |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of Outdoor Siren is open or not.       |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Outdoor Siren and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Outdoor Siren and the Hub.<br />**The Outdoor Siren will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Outdoor Siren.<br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.10.3 Setting



<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808144048234.png" width="250" />
</div>





|      **Parameter**       |                          **Value**                           | **Description**                                              |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc. And you can also edit the device name here by yourself. |
|      **Add Room **       | ![](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113612270.png) | You can select one of the rooms created before and then link the device to. **When linked to a specific room, the device will be displayed on the product list of the room.* |
|  **Siren Triggered by**  | ![](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222113626888.png) | The siren can be linked with one or multiple rooms as a warning device to announce any alarm or other events with sound and strobe. |
|    **Alarm Settings**    | ![](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808144345785.png) | **Buzzer**:<br />1. You can enable/disable buzzer and switch alarm volume among three levels: High (105dB) /  Medium (95dB) / Low (85dB) <br />2. Buzzer Trigger Method: You can select one or more triggers.<br /> *An alarm sound will be triggered when the following events occur.*  <br /><br />**Alarm Light**: <br />1. You can enable/disable alarm light manually.  <br />2. Alarm Light Trigger Method: You can select one or more triggers. <br />*The siren strobe will be triggered when the following events occur.* <br /><br />**Alarm Duration**: <br />You can set the alarm duration of siren from 1s ~ 15mins. <br />*90s by default*<br /><br />**Working indicator light**: <br />When enabled, the outdoor siren LED will flash according to the set rules, alerting that the system is currently in arming mode. |
|     **Volume Test**      |                              /                               | You can use it to check if the current volume could meet your requirement. |
|       **Find Me**        | ![image-20231222114844938](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222114844938.png) | A function that used to find your Indoor Siren among numerous devices. When you enable this function, the indicator in Indoor Siren will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![image-20231222114856029](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222114856029.png) | A function that used to check the signal strength between the Indoor Siren and the hub at the tested place, which is designed to help you choose the right place for installation.<br />When you enable this function, you can check the signal strength by watching the indicator in Indoor Siren and the feedback in app. |
|    **Disable Device**    |                           ON / OFF                           | If this button is ON, the alarm  and malfunctions generated by this Indoor Siren will no longer be uploaded to the Hub and App. <br />**It is recommended that you disable the device only if  it’s defective. Before turning on this function, please ensure that you are  aware of the situation to avoid possible personal injury or property damage that  may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Indoor Siren will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Indoor Siren.      |

<br />

### 4.11 Keypad

**You can click [Spec](https://wiki.roombanker.com/control-device/keypad/specification) and [QSG](https://wiki.roombanker.com/control-device/keypad/quick-start-guide)* to check more information about [Keypad](https://www.roombanker.com/products/alarm-keypad/).

#### 4.11.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222115129132.png" width="400" />
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222115339793.png" width="400" />
</div>


| **Appearance**                  | **Description**                                              |
| ------------------------------- | ------------------------------------------------------------ |
| **Fault Indicator**             | Red, used to indicate the system fault.<br />**The red indicator turns on when there is a fault in system.* |
| **Signal Indicator**            | Red / Orange / Green.<br />Used to indicate the status of Signal Strength and Find Me. |
| **Alarm Indicator**             | Red.<br />It will flash to indicate the alarm event of system. |
| **Arm/Disarm Indicator**        | Blue / Green.<br />The blue indicator turns on when the system armed. |
| **Numeric Key**                 | The Numeric Keys (0 ~ 9) used for entering PIN Code for daily operations. |
| **Clear Key**                   | Clear the code you entered before and then start for a new operation. |
| **Custom Key**                  | Click to trigger the preset function you set and linked before. |
| **Arm Stay Key**                | Arm the system in Stay Mode.                                 |
| **Arm Away Key**                | Arm the system in Away Mode.                                 |
| **Disarm Key**                  | Disarm the system.<br />**You have to enter the PIN Code to disable the system.* |
| **Power** **Switch** **Button** | Used to turn ON/OFF the keypad manually.                     |
| **Register Button**             | Press and hold for 5s to add the Keypa to the Hub.<br />**Register Button is only used for re-adding or connecting the keypad into another Hub.* |
| **Tamper Switch**               | Used to detect the tamper alarm status of the lid.           |

#### 4.11.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222115604258.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this Keypad. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows if there is alarm triggered in the linked room(s).     |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of Keypad is open or not.              |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Keypad and the Hub.    |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Keypad and the Hub.<br />**The Keypad will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of Keypad.<br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.11.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222115953212.png" width="200" />
</div>


|        **Parameter**         |                          **Value**                           | **Meaning**                                                  |
| :--------------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|    **Basic Information**     |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|        **Add Room **         | ![image-20231222120855973](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222120855973.png) | You can select one of the rooms created before and then link the Keypad to.<br />**When linked to a specific room, the Keypad will be displayed on the product list of the room.* |
|    **Keypad can control**    | ![image-20231222120904615](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222120904615.png) | Select one or multiple rooms that you want to control with this keypad. |
|         **PIN Code**         | ![image-20231222120915362](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222120915362.png) | You can set a PIN code that can be used to control the system later.<br />**The PIN Code consists of six digits, and the first two digits are fixed ID numbers assigned by the system, while the last four digits are customized by yourself.* |
| **Arming Without PIN Code**  |                           ON / OFF                           | If this button is ON, you can just click [ ![Arm Stay](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Stay.png) ] or [ ![Arm Away](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Away.png) ] in keypad to arm the system directly, without enter the PIN Code in advance. |
|       **Alarm Button**       | ![image-20231222120930028](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222120930028.png) | If the button of “**Alarm Button**” is ON, you can trigger alarm manually by pressing and holding the special numeric keys for 3 seconds.<br />**Number Key 1** (Fire Alarm) / **Number Key 2** (Panic Alarm) / **Number Key 3** (Medical Alarm)<br /><br />You can also enable silent panic/medical alarm independently.<br />When the button of “**Silent Panic Alarm**” or “**Silent Medical Alarm**” is ON, there will be no audible or light alarm when the alarm is triggered, but the alarm notification could still be pushed to remote terminals via app, SMS, Phone call. |
|       **Keypad Lock**        | ![image-20231222121004302](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808145513497.png) | You can set the trigger condition of keypad lock.<br />If a keypad is locked due to multiple incorrect password attempts, Super Admin / Admin users can unlock it via the app. |
|          **Buzzer**          |                           ON / OFF                           | The buzzer is used to feedback whether your operations are performed successfully by sound, as well as alerting if any alarm triggered.You can also turn ON/OFF the buzzer of keypad here. |
|           Find Me            | ![image-20231222121013050](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222121013050.png) | A function that used to find your Keypad among numerous devices. When you enable this function, the signal indicator in Keypad will flash green to help you find the target device quickly. |
|   **Signal Strength Test**   | ![image-20231222121022109](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222121022109.png) | A function that used to check the signal strength between the Keypad and the hub at the tested place, which is designed to help you choose the right place for installation. When you enable this function, you can check the signal strength by watching the signal indicator in Keypad and the feedback in app. |
| **Customize Button Setting** | ![image-20231222121030786](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222121030786.png) | After configured, you can press the “**C**” in keypad to trigger the specified event you linked with.<br />*Please make sure there is at least one custom scene configured in advance if you need to link with “**Automation**”.<br />You can turn to [Charter 6. Scene Management](#charter-6-scene-management) for details.* |
|   **Display On Homepage**    |                           ON / OFF                           | When enabled, the Keypad will show up on homepage so that you can operate quickly. |
|        **User Guide**        |                              /                               | Click to check the user guide document of Keypad.            |
|      **Delete Device**       |                              /                               | Delete the Keypad from your Hub.                             |

#### 4.11.4 Operation

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *You need to enter the complete a 6-digits code for the following operations if the PIN Code is required. e.g. “01xxxx”.*

##### Arming with PIN Code

- **Arm Stay**: `PIN Code` + [ ![Arm Stay](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Stay.png) ]
- **Arm Away**: `PIN Code` + [ ![Arm Away](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Away.png) ]

|               |                        **Successful**                        |                          **Failed**                          |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **Indicator** | ![Armed](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Armed.png)<br />The Arm/Disarm Indicator lights up blue. | ![Non](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Non.png)<br />The Arm/Disarm Indicator is OFF |
|  **Buzzer**   |                          Beeps once                          |                      Beeps three times                       |

<br />

##### Arming without PIN Code

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : Please make sure the function of **Arming Without PIN Code** is ON in advance

- Press [ ![Arm Stay](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Stay.png) ] or  [ ![Arm Away](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Away.png) ] in Keypad to arm the system directly, instead of entering the PIN Codes.

|               |                        **Successful**                        |                          **Failed**                          |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **Indicator** | ![Armed](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Armed.png) <br />The Arm/Disarm Indicator lights up blue. | ![Non](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Non.png) <br />The Arm/Disarm Indicator is OFF |
|  **Buzzer**   |                          Beeps once                          |                      Beeps three times                       |

<br />

##### Disarming

- Disarm the system: `PIN Code` + [ ![disarm button](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm%20button.png) ]

|               |                        **Successful**                        |                          **Failed**                          |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **Indicator** | ![disarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm.png) <br />The Arm/Disarm Indicator flashes green twice. | ![Armed](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Armed.png) <br />The Arm/Disarm Indicator is still blue (armed status) |
|  **Buzzer**   |                          Beeps once                          |                      Beeps three times                       |

<br />

##### Duress Silent Alarm

Duress Silent Alarm is designed to protect and even rescue you in critical situations, such as when faced with a burglar demanding disarming, it allows you to disarm the system as usual, and send an alarm message discreetly to the outside terminals, to ask help silently.

**`Duress Code`** = **`PIN Code`** ± **1**, Only need to change the last digit of your PIN Code (±1)**.**

e.g. Your PIN Code is "**011234**", you can enter "**011233**" or "**011235**" as your duress codes.



> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> 1. If the last digit is "**0**", then you can change it to "**1**" or "**9**". *e.g. 01001**0** (PIN Code) → 01001**1** or 01001**9** (Duress Code).
> 2. If the last digit is "**9**", then you can change it to "**8**" or "**0**". *e.g. 02200**9** (PIN Code) → 02200**0** or 02200**8** (Duress Code).

- Duress Disarming: `Duress Code` +  [ ![disarm button](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm%20button.png) ]

|               |                        **Successful**                        |                          **Failed**                          |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **Indicator** | ![disarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm.png)  <br />The Arm/Disarm Indicator flashes green twice. | ![Armed](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Armed.png)  <br />The Arm/Disarm Indicator is still blue (armed status) |
|  **Buzzer**   |                          Beeps once                          |                      Beeps three times                       |

<br />

##### Alarm Button

You can also trigger alarm manually in case of any emergency or dangerous incident, then the sirens will start to announce the alarm in different sounds within 0.5s, and the alarms will be pushed to remote terminals via app notification, SMS, Phone Call and so on.

- Fire Alarm: Press and hold [ ![Fire alarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Fire%20alarm.png) ] for 3 seconds to trigger a fire alarm.

- Panic Alarm: Press and hold [ ![Panic](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Panic.png) ] for 3 seconds to trigger a panic alarm.

  > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *There will be no sound or strobe alarm if the function of “**Silent Panic Alarm**” is ON.*

- Panic Alarm: Press and hold [ ![Medical](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Medical.png) ] for 3 seconds to trigger a medical alarm.

  > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *There will be no sound or strobe alarm if the function of “**Silent Medical Alarm**” is ON.*

<br />

##### Customize Button

- Custom Function: PIN Code + [ ![Custom](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Custom.png) ]

|            | **Successful** |    **Failed**     |
| :--------: | :------------: | :---------------: |
| **Buzzer** |   Beeps once   | Beeps three times |

<br />

### 4.12 Keyfob

**You can click [Spec](https://wiki.roombanker.com/control-device/keyfob/specification) and [QSG](https://wiki.roombanker.com/control-device/keyfob/quick-start-guide)* to check more information about [Keyfob](https://www.roombanker.com/products/keyfob-for-security-system/).

#### 4.12.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222130938966.png" width="350" />
</div>


| **Appearance**          | **Description**                                              |
| ----------------------- | ------------------------------------------------------------ |
| **LED Indicator**       | Red / Red.<br />Used to indicate the result of your operations. |
| **Arm Button**          | Used to arm the system in one button.                        |
| **Disarm Button**       | Used to disarm the system in one button.                     |
| **Custom Button Ⅰ / Ⅱ** | Click to trigger the preset function you set and linked before. |

#### 4.12.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222131226189.png" width="250" />
</div>


| **Parameter**         | **Value**               | **Meaning**                                                  |
| --------------------- | ----------------------- | ------------------------------------------------------------ |
| Associated Scene      | 0 ~ 64                  | Shows the number of custom scenes associated with this Keyfob. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
| Associated User       | Not associated(Default) | Shows the associated user for this keyfob.<br />**You need to associate the keyfob with a specific user at first, so that you can use keyfob to control the system.* |
| Key **Ⅰ** **/** **Ⅱ** | Disabled(Default)       | After configured, you can press the custom button in keyfob to trigger the specified event that you linked with.<br />*Please make sure there is at least one custom scene configured in advance if you need to link with “**Automation**”.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
| Battery Status        |                         | Shows the battery level of Keyfob.                           |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *There may be a delay in updating the status of the keyfob, as it only pushes and updates its status information when it starts to interact with the Hub, e.g. when a button is pressed in the Keyfob.* 

#### 4.12.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222131615138.png" width="250" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Basic Information** |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|  **Associated User**  |          Local User / App User<br />(User-defined)           | When the keyfob is associated with a user, the user can operate and control the system with keyfob within the scope of the permissions granted.<br />**A keyfob is only able to be associated with one user. Please turn to [Charter 5. User Management](#charter-5-user-management) for more detail about users.* |
|       Key Ⅰ / Ⅱ       | ![image-20231222132047970](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222132047970.png) | After configured, you can press the buttons in keyfob to trigger the specified event you linked with.<br />*Please make sure there is at least one custom scene configured in advance if you need to link with “**Automation**”. You can turn to* [Charter 6. Scene Management](#charter-6-scene-management) *for details.* |
|    **User Guide**     |                              /                               | Click to check the user guide document.                      |

#### 4.12.4 Operation

##### Arm Away with Keydob

- Press [ ![Arm Away](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Away.png) ]

##### Disarm with Keyfob

- Press [ ![disarm button](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm%20button.png) ]

##### Custom Button with Keyfob

- Press [ **Ⅰ** ] or [ **Ⅱ** ] to trigger the preset scene you configured before.



##### Result Feedback

|               |                          Successful                          |                            Failed                            |
| :-----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **Indicator** | ![keyfob green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/keyfob%20green.png)<br />The green indicator flashes twice | ![keyfob red](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/keyfob%20red.png)<br />The red indicator flashes twice |

<br />

### 4.13 Relay

**You can click [Spec](https://wiki.roombanker.com/automation-device/relay/specification) and [QSG](https://wiki.roombanker.com/automation-device/relay/quick-start-guide)* to check more information about [Relay](https://www.roombanker.com/products/smart-relay/).

#### 4.13.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222133122878.png" width="600" />
</div>


| **Appearance**          | **Description**                                              |
| ----------------------- | ------------------------------------------------------------ |
| **Signal Indicator**    | Flashing Green / Orange / Red<br />**Used to indicate signal strength status, Find Me status* |
| **Register Button**     | Press and hold for 5s to add the Relay to the Hub. <br />**Register Button is only used for re-adding or connecting the peripheral to another hub* |
| **ON/OFF Indicator**    | ON: Blue indicator is on<br />OFF: Blue indicator is off     |
| **Power Indicator**     | Used to show the power connection of relay.                  |
| **Power Switch Button** | Used to turn ON/OFF the Relay manually.                      |

#### 4.13.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808134055502.png" width="300" />
</div>



|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0～64                             | Check how many custom scenes are associated with this Relay. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Relay and the Hub.     |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Relay and the Hub.<br />**The Relay will not be  functional if the status is offline.* |
|    **Relay Mode**     |                 Switching Mode / Pulse Mode                  | Set to either "Switch " or "Pulse " mode within the relay's device settings. |
|     **Schedule**      | ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png) | Trigger the relay execute action when the estimated time is reached |
|     **Countdown**     | ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png) | Trigger the relay execute action after the countdown timer expires |

#### 4.13.3 Setting

##### Basic Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808135141119.png" width="300" />
</div>





|      **Parameter**       |                          **Value**                           | **Meaning**                                                  |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**   |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|       **Add Room**       |                       Customized Room                        | You can select one of the rooms created before and then link the Relay to.<br />*When linked to a specific room, the Relay will be displayed on the peripherals list of the room. |
|     **Output Mode**      |                 Switching Mode / Pulse Mode                  | Customize the default power-on state for both "Switch" and "Pulse" modes. <br />For "Pulse" mode, configure the desired pulse duration. |
|       **Find Me**        | ![image-20231222134925325](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134925325.png) | It helps you find out your Relay when there are numerous devices.<br />When you enable this function, the indicator in Relay will flash green to help you find the target device quickly. |
| **Signal Strength Test** | ![image-20231222134941423](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134941423.png) | A function that used to check the signal strength between Relay and hub at the tested place, which is designed to help you choose the right place for installation. <br />When you enable this function, you  can check the signal strength by watching the indicator in Relay and the feedback in app. |
| **Display On Homepage**  |                           ON / OFF                           | When enabled, the Relay will show up on homepage so that you can operate quickly. |
|      **User Guide**      |                              /                               | Click to check the user guide document of Relay              |
|    **Delete Device**     |                              /                               | When enabled, the Relay will show up on homepage  so that you can operate quickly. |

##### Schedule Setting

Step 1: Click the "**Schedule** ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png)" and turn to the adding page.

Step 2: Click "**+**" on the top right corner and turn to "Schedule Configure Page"

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/image-20240808135823958.png" width="300" />
</div>



- Select the execution time and which day of the week you want to loop.
- Execute Action: The Execute Action you want the relay to perform when it reaches the time you have set.



##### Countdown Setting

Click "**Countdown** ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png)" and turn to the adding page.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134528282.png" width="200" />
</div>


- Choose how long after you want to perform the action.
- Execute Action: The Execute Action you want to perform when it reaches the time you have set.

### 4.14 Wall Switch

**You can click [Spec](https://wiki.roombanker.com/automation-device/wall-switch/specification) and [QSG](https://wiki.roombanker.com/automation-device/wall-switch/quick-start-guide)* to check more information about [Wall Switch](https://www.roombanker.com/products/wall-switch/).

#### 4.14.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222135046649.png" width="600" />
</div>


|     **Appearance**      | **Description**                                              |
| :---------------------: | ------------------------------------------------------------ |
|  **Signal Indicator**   | Green / Orange / Red<br />**Used to indicate signal strength status, and Find Me status* |
|  **ON/OFF Indicator**   | ON: Blue indication is on<br />OFF: Indicator is off         |
|   **Power Indicator**   | Used to show the power status of Wall Switch                 |
| **Power Switch Button** | Used to turn ON/OFF the Wall Switch manually.                |

> ![Danger](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Danger.png) **Danger**: 
>
> - Only a qualified electrician or installer should install Wall Switch.
> - This device is not suitable for use in locations where children are likely to be present.



#### 4.14.2 State

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222135634545.png" width="200" />
</div>


|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0～64                             | Shows the number of custom scenes associated with this Wall Switch. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the Wall Switch and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Wall Switch and the Hub.<br />**The* *Wall Switch* *will not be functional if the status is offline.* |
|   **Opened/Closed**   | ![ON](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/ON.png) / ![Off](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Off.png) | Click the button to switch the relay open/close              |
|      **Timing**       | ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png) | Trigger the relay execute action when the estimated time is reached |
|     **Countdown**     | ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png) | Trigger the relay execute action after the countdown timer expires |
|    **Consumption**    |                              /                               | Show the power consumption details<br />*Click to see more real-time information |

#### 4.14.3 Setting

##### Basic Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140005981.png" width="200" />
</div>


|       **Parameter**        |                         **Setting**                          | **Meaning**                                                  |
| :------------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|   **Basic Information**    |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc.<br />And you can also edit the device name here by yourself. |
|    **Room belongs to**     |                       Customized Room                        | You can select one of the rooms created before and then link the Wall Switch to.<br />**When linked to a specific room, the device will be displayed on the peripherals list of the room.* |
| **Power On Default State** |                    ON / OFF / Last Status                    | You can select if you want to in default state when power is back on<br />OFF: When power is back on，the plug is off by default<br />ON: When power is back on，the plug is on by default<br />Last Status: After re-powering on, the power supply remains in the state before power outage. |
|   **Consumption Alert**    |                              /                               | You can enter a daily/weekly/monthly power warning value that will alert you if it is reached or exceeded. |
|        **Find Me**         | ![image-20231222140332787](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140332787.png) | A function that used to find your Wall Switch among numerous devices.<br />When you enable this function, the indicator in Wall Switch will flash green to help you find the target device quickly. |
|  **Signal Strength Test**  | ![image-20231222140339899](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140339899.png) | A function that used to check the signal strength between Wall Switch and hub at the tested place, which is designed to help you choose the right place for installation. <br />When you enable this function, you  can check the signal strength by watching the indicator in Wall Switch and the feedback in  app. |
|  **Display On Homepage**   |                           ON / OFF                           | When enabled, the Wall Switch will show up on homepage so that you can operate quickly. |
|       **User Guide**       |                              /                               | Click to check the user guide document of Wall Switch        |
|     **Delete Device**      |                              /                               | When enabled, the Wall Switch will show up on homepage so that you can operate quickly. |



##### Timing Setting

Step 1: Click the "**Timing** ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png)" and turn to the adding page.

Step 2: Click "**+**" on the top right corner and turn to "Timing Configure Page"

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134220745.png" width="200" />
</div>


- Select the execution time and which day of the week you want to loop.
- Execute Action: The Execute Action you want the relay to perform when it reaches the time you have set.



##### Countdown Setting

Click "**Countdown** ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png)" and turn to the adding page.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134528282.png" width="200" />
</div>


- Choose how long after you want to perform the action.
- Execute Action: The Execute Action you want to perform when it reaches the time you have set.



##### Consumption Preview

Check the real-time power statistics, including Current power, Current and Voltage.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140543248.png" width="300" />
</div>


Daily, weekly, monthly and yearly trends in electricity consumption will be shown.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140753803.png" width="150" />
</div>


> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note**: There will be several minutes delay of updating the power consumption.

<br />

### 4.15 Smart Plug

**You can click Spec ([EU](https://wiki.roombanker.com/automation-device/smart-plug-eu/specification) / [US](https://wiki.roombanker.com/automation-device/smart-plug-us/specification) / [UK](https://wiki.roombanker.com/automation-device/smart-plug-uk/specification) )and QSG ([EU](https://wiki.roombanker.com/automation-device/smart-plug-eu/quick-start-guide) / [US](https://wiki.roombanker.com/automation-device/smart-plug-us/quick-start-guide) / [UK](https://wiki.roombanker.com/automation-device/smart-plug-uk/quick-start-guide)) to check more information about [Smart Plug](https://www.roombanker.com/products/smart-plug/).*

#### 4.15.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140922630.png" width="700" />
</div>


|    **Appearance**    | **Description**                                          |
| :------------------: | -------------------------------------------------------- |
| **ON/OFF Indicator** | ON: Blue indicator is on<br />OFF: Blue indicator is off |

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : there are three models (UK / US / EU standard plug) available, and we only select one of them for the following display and demonstration. You can select the appropriate one according to your requirements.

#### 4.15.2 State

|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated Scene**  |                            0～64                             | Shows the number of custom scenes associated with this Smart Plug. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows  the signal strength between the Smart Plug and the Hub. |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the Smart Plug and the Hub.<br />**The* *Smart Plug* *will not be functional if the status is offline.* |
|   **Opened/Closed**   | ![ON](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/ON.png) / ![Off](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Off.png) | Click the button to switch the relay open/close              |
|      **Timing**       | ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png) | Trigger the relay execute action when the estimated time is reached |
|     **Countdown**     | ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png) | Trigger the relay execute action after the countdown timer expires |
|    **Consumption**    |                              /                               | Show the power consumption details<br />**Click to see more real-time information* |
|    **Child lock**     |                              /                               | When the child lock is switched on, any key operation loses its control function，you can only control the plug through APP.<br />*Press 4 times within 5 seconds to unlock the child lock. |

#### 4.15.3 Setting

##### Basic Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222141634566.png" width="200" />
</div>


|       **Parameter**        |                         **Setting**                          | **Meaning**                                                  |
| :------------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|   **Basic Information**    |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc. And you can also edit the device name here by yourself. |
|    **Room belongs to**     |                       Customized Room                        | You can select one of the rooms created before and then link the Wall Switch to. <br />**When linked to a specific room, the device will be displayed on the peripherals list of the room.* |
| **Power On Default State** |                    ON / OFF / Last Status                    | You can select if you want to in default state when power is back on<br />OFF: When power is back on, the plug is off by default <br />ON: When power is back on, the plug is on by default <br />Last Status: After re-powering on, the power supply remains in the state before power outage. |
|   **Consumption Alert**    |                              /                               | You can enter a daily / weekly / monthly power warning value that will alert you if it is reached or exceeded. |
|  **Signal Strength Test**  | ![image-20231222142013019](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222142013019.png) | A function that used to check the signal strength between the Smart Plug and the Hub at current place. When this function is enabled, you can check the feedback from the app to check the signal strength easily. |
|  **Display On Homepage**   |                           ON / OFF                           | When enabled, the Wall Switch will show up on homepage so that you can operate quickly. |
|       **User Guide**       |                              /                               | Click to check the user guide document of Wall Switch        |
|     **Delete Device**      |                              /                               | When enabled, the Wall Switch will show up on homepage so that you can operate quickly. |



##### Timing Setting

Step 1: Click the "**Timing** ![Timing](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Timing.png)" and turn to the adding page.

Step 2: Click "**+**" on the top right corner and turn to "Timing Configure Page"

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134220745.png" width="200" />
</div>


- Select the execution time and which day of the week you want to loop.
- Execute Action: The Execute Action you want the relay to perform when it reaches the time you have set.

##### Countdown Setting

Click "**Countdown** ![Countdown](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Countdown.png)" and turn to the adding page.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222134528282.png" width="200" />
</div>


- Choose how long after you want to perform the action.
- Execute Action: The Execute Action you want to perform when it reaches the time you have set.

##### Consumption Preview

Check the real-time power statistics, including Current power, Current and Voltage.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140543248.png" width="300" />
</div>


Daily, weekly, monthly and yearly trends in electricity consumption will be shown.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222140753803.png" width="150" />
</div>


> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note**: There will be several minutes delay of updating the power consumption.

---



<br />

### 4.16 Indoor IPC

**You can click [Spec](https://wiki.roombanker.com/video-alarm-device/indoor-ipc/specification) and [QSG](https://wiki.roombanker.com/video-alarm-device/indoor-ipc/quick-start-guide)* to check more information about [Indoor IPC](https://www.roombanker.com/products/indoor-security-camera/).


#### 4.16.1 Appearance

<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/qsg/indoor-qsg-1.png" width="700" />
</div>
<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/qsg/indoor-qsg-2.png" width="700" />
</div>

#### 4.16.2 Set up router

The device supports the 2.4GHz &5GHz WiFi.<br />
Ensure you have the SSID and password.<br />

![indoor-qsg-5](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/qsg/indoor-qsg-5.png)

**Note:** 
The length of the Wi-Fi SSID and password should not exceed 24 characters.<br />
If your device has trouble connecting to the Wi-Fi network, or if you wish to switch networks, press and hold the RESET button for 5 seconds to reset the device.<br />  

#### 4.16.3 Add Indoor Camera

<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-0.png" width="350" height="70" />
</div>

1.Plug in the cable to power up the Camera. Wait a moment until the red indicator starts flashing.  <br />
2.Click " + --> Scan " to add Camera by scanning the QR code.  <br />
3.Connect to the internet via Wi-Fi, the blue indicator turns on when the connection is successful.  <br />

![indoor-qsg-6](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/qsg/indoor-qsg-6.png) 

<br />

#### 4.16.4 Console

|      **Parameter**         |    **Setting**                                                          | **Meaning**                                                                                                            |
| :------------------------: | :---------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------- |
| **Screenshot**             | /                                | Supports taking screenshots of the camera's shooting area, and the screenshots are stored locally on the mobile phone. |
| **Lens Switch**            | ON / OFF                         | You can manually turn the lens switch, which will take effect immediately.Default is off. |
| **Recording**              | /                                | Can record the current video and store it locally on the mobile phone. |
| **Video Resolution**       | 2K / 480p / auto                 | Switch video resolution.Default is auto. |
| **Sound**                  | ON / OF                          | You can turn the camera sound on or off in the video preview page. |
| **Voice Communication**    | /                                | Supports instant voice communication: Press and hold the voice button to send voice in real-time; release the button to immediately receive the other party's response. The entire process requires no waiting, making it as smooth as a face-to-face conversation. |
| **Pan/Tilt**               | Pan: 0 ~ 350°,Tilt: 50° ~ -45°   | The camera's monitoring angle can be adjusted via the up, down, left, and right buttons.  |
| **Sound**                  | ON / OF                          | You can turn the camera sound on or off in the video preview page. |
| **Select playback time**   | /                                | Supports selecting a specific time for video playback. |
| **Delete playback video**  | /                                | Supports deleting specified playback videos. |
| **Memory Card Capacity**   | /                                | Supports checking the TF card status, along with its total capacity and remaining capacity. |
| **Playback History**       | ON / OF                          | **Recording switch:** ON/OFF.<br /> **All-Day Recording:** 24-hour recording<br /> **Event Recording:** Record when an event is detected. |

<br />

#### 4.16.5 Settings

|      **Parameter**      |                          **Value**                           | **Meaning**                                                  |
| :---------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Basic Information**   | ![Outdoor Info](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/um/indoor-ipc-5.png)     | Check the basic information of this device, including MAC Address, Serial Number, etc. <br />And you can also edit the device name here by yourself. <br /> View device version info; upgrade if a new version is available.|
| **Location**            | ![Location](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-2.png) | Choose camera installation location; support custom naming.|
| **User Management**     | ![User](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-3.png)     | Share Camera to APP User:<br />Step 1: Enter "Indoor Camera Settings/User Management" on APP.<br />Step 2: Click Invite User and select the user role from Administrator and Regular User.<br />Step 3: Enter the Email address of the user you want to share with.<br />Step 4: The invited user need to enter Message page, and switch to Camera Share on the top.<br />Step 5: The invitation will be notified here, and click Agree to finish the invitation.<br /> |
| **Motion Detection**    | ![Motion](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/um/indoor-ipc-6.png)   | **Motion Detection:** When enabled, it will detect movements in the live view in real-time and trigger the set operations.<br /> **Human Shape Filter:** It only reacts to the movement of people, reducing false alarms.<br />**Detection Configuration:**<br />1.Detection Sensitivity:<br />Sensitivity can be adjusted as needed.<br />2.Detection Effective Time:<br />Supports all-day or specific time period monitoring.repeat support everyday and customize.<br />3.Detection Area:<br />Customize the monitoring area, such as the door or the living room, and ignore irrelevant areas.<br />**Detection Alarm:**<br />1.Alarm Interval:<br />Set the alarm interval to avoid repeated alarms and storage waste.Value[30s \ 1min \ 3min \ 5min]<br />2.Recording Duration:<br />The duration of the video recording triggered by movement.value[1min \ 2min \ 3min]<br />3.Motion Tracking:<br />Automatically track the target when an abnormality is detected and continuously capture its trajectory.<br />|
| **Camera Settings**     | ![Settings](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/indoor-ipc/um/indoor-ipc-7.png) | **Wi-Fi:** <br />You can switch Wi-Fi networks,connection status, signal strength, and IP address.<br />**Privacy Mode:** <br />You can manually turn the lens switch on/off on the settings page, which will take effect immediately. You can also customize the timed tasks for turning the lens switch on/off.<br />**Device Volume:** <br />You can control the on/off status of the device speaker or adjust the volume through the switch.<br />**Image Flip:** <br />When the switch is turned on, the image on the camera preview page will be flipped.<br />**Camera Restart:**<br />Restart the camera. |
| **User Guide**          | /    | Click to check the user guide document of indoor IPC.               |
| **Delete Device**       | /    | Delete the indoor from your hub.                                |


<br />

### 4.17 Outdoor IPC

**You can click [Spec](https://wiki.roombanker.com/video-alarm-device/outdoor-ipc/specification) and [QSG](https://wiki.roombanker.com/video-alarm-device/outdoor-ipc/quick-start-guide)* to check more information about [Outdoor IPC](https://www.roombanker.com/products/outdoor-security-camera/).


#### 4.17.1 Appearance

<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/qsg/outdoor-qsg-2.png" width="500" height="200"/>
</div>
<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/qsg/outdoor-qsg-3.png" width="700" />
</div>

#### 4.17.2 Set up router

The device supports 2.4GHz WiFi (does not support 5GHz). <br />  
Please set the router parameters and record your WiFi SSID and password before connecting to the WiFi network.<br />

![outdoor-qsg-5](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/qsg/outdoor-qsg-6.png)
<br />

#### 4.17.3 Add Outdoor Camera

<div align="left">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-0.png" width="350" height="70" />
</div>
<br />

1.Plug in the cable to power up the Camera. Wait a moment until the red indicator starts flashing.<br />  
2.Click " + --> Scan " to add Camera by scanning the QR code.<br />  
3.Connect to the internet via Wi-Fi, the blue indicator turns on when the connection is successful.<br />  

![outdoor-qsg-6](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/qsg/outdoor-qsg-7.png)  
<br />


#### 4.17.4 Console

|      **Parameter**         |    **Setting**                                                          | **Meaning**                                                                                                            |
| :------------------------: | :---------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------- |
| **Screenshot**             | /                                | Supports taking screenshots of the camera's shooting area, and the screenshots are stored locally on the mobile phone. |
| **Alarm**                  | ON / OFF                         | The camera plays an alarm sound.Default is off. |
| **Recording**              | /                                | Can record the current video and store it locally on the mobile phone. |
| **Camera Light**           | ON / OFF                         | Control the on/off of the camera light.Default is off. |
| **Voice Communication**    | /                                | Supports instant voice communication: Press and hold the voice button to send voice in real-time; release the button to immediately receive the other party's response. The entire process requires no waiting, making it as smooth as a face-to-face conversation. |
| **Lens Rotation**          | Pan: 0 ~ 350°,Tilt: -90° ~ 30°   | The camera's monitoring angle can be adjusted via the up, down, left, and right buttons.  |
| **Sound**                  | ON / OF                          | You can turn the camera sound on or off in the video preview page. |
| **Video Resolution**       | 2K / 480p / auto                 | Switch video resolution.Default is auto. |
| **Select playback time**   | /                                | Supports selecting a specific time for video playback. |
| **Delete playback video**  | /                                | Supports deleting specified playback videos. |
| **Memory Card Capacity**   | /                                | Supports checking the TF card status, along with its total capacity and remaining capacity. |
| **Event Recording Switch** | ON / OF                          | On: Record when an event is detected <br /> Off: Do not record |
<br />

#### 4.17.5 Settings

|      **Parameter**      |                          **Value**                           | **Meaning**                                                  |
| :---------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Basic Information**   | ![Outdoor Info](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-1.png)     | Check the basic information of this device, including MAC Address, Serial Number, etc. <br />And you can also edit the device name here by yourself. <br /> View device version info; upgrade if a new version is available.|
| **Location**            | ![Location](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-2.png) | Choose camera installation location; support custom naming.|
| **User Management**     | ![User](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-3.png)     | Share Camera to APP User:<br />Step 1: Enter "Outdoor Camera Settings/User Management" on APP.<br />Step 2: Click Invite User and select the user role from Administrator and Regular User.<br />Step 3: Enter the Email address of the user you want to share with.<br />Step 4: The invited user need to enter Message page, and switch to Camera Share on the top.<br />Step 5: The invitation will be notified here, and click Agree to finish the invitation.<br /> |
| **Motion Detection**    | ![Motion](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-4.png)   | **Motion Detection:** When enabled, it will detect movements in the live view in real-time and trigger the set operations.<br /> **Human Shape Filter:** It only reacts to the movement of people, reducing false alarms.<br />**Detection Configuration:**<br />1.Detection Sensitivity:<br />Sensitivity can be adjusted as needed.Larger value means more sensitivity.Value[1–10]<br />2.Human shape detection sensitivity:<br />Sensitivity can be adjusted as needed.Larger value means more sensitivity.Value[1–5]<br />3.Detection Effective Time:<br />Supports all-day or specific time period monitoring.repeat support everyday and customize.<br />4.Detection Area:<br />Customize the monitoring area, such as the door or the living room, and ignore irrelevant areas.<br />**Detection Alarm:**<br />1.Alarm Interval:<br />Set the alarm interval to avoid repeated alarms and storage waste.Value[2min \ 5min \ 10min \ Close]<br />2.Recording Duration:<br />The duration of the video recording triggered by movement.value[10s \ 20s \ 30s]<br />3.Sound & Light:<br />You can configure the method of the acoustic-optic alarm and the acoustic-optic alarm plan.<br />3.1 acoustic-optic alarm: supports sound only, light only, sound and sound-light.<br />3.2 acoustic-optic alarm plan:Scheduled start and end times can be set, with repeat frequency configurable as required. If the set start time is earlier than the current time, the schedule runs the same day; if later, it runs the following day.<br /> |
| **Camera Settings**     | ![Settings](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-5.png) | **Night Vision Mode:** <br />You can customize the color of the image in night vision mode.<br />**Device Volume:** <br />You can control the on/off status of the device speaker or adjust the volume through the switch.<br />**Image Flip:** <br />When the switch is turned on, the image on the camera preview page will be flipped.<br />**Camera Restart:**<br />Restart the camera. |
| **Storage Management**  | ![Storage](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-ipc/um/outdoor-ipc-6.png)  | Supports checking the TF card status, along with its total capacity and remaining capacity.<br />On/off switch for event-detection recording. |
| **User Guide**          | /    | Click to check the user guide document of Outdoor IPC.               |
| **Delete Device**       | / | Delete the Outdoor from your hub.                                |

<br />


### 4.18 Outdoor PIR Sensor(IR+MW)

You can click [Spec](https://wiki.roombanker.com/motion-sensor/outdoor-pir-sensor/specification) and [QSG](https://wiki.roombanker.com/motion-sensor/outdoor-pir-sensor/quick-start-guide) to check more information 
<!-- Todo about [PIR sensors](https://www.roombanker.com/products/pir-sensor/). -->

#### 4.18.1 Appearance

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-pir/outdoor-pir-0.png" width="400" />
</div>


| **Appearance**                | **Description**                                              |
| :---------------------------- | :-------------------------------------------------------------- |
| **Registration Mode**         | Green light flashes (250ms on / 750ms off) when powered on or network button held.          |
| **Find Me**                   | Green light flashes (1s on / 1s off).                                                       |
| **Signal Strength Detection** | Auto-off after 2 min. <br /> **Strong:** Green (3s on / 3s off) <br /> **Medium:** Orange (3s on / 3s off) <br /> **Weak:** Red (3s on / 3s off) <br /> **Lost:** Red (250ms on / 250ms off) <br /> |
| **Motion Detected**           | Red light flashes once every 500ms.                                                         |


#### 4.18.2 State
<!-- Todo
<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/PIR%20State.png" width="250" />
</div>
-->

|     **Parameter**     |                          **Value**                           | **Meaning**                                                  |
| :-------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| **Associated scene**  |                            0 ~ 64                            | Shows the number of custom scenes associated with this PIR. You can also click to view and configure the scenes.<br />**Please turn to [Charter 6. Scene Management](#charter-6-scene-management) for more details.* |
|    **Arm Status**     |                         Arm / Disarm                         | Shows the arm status of the PIR. When it’s armed, the PIR could detect motion events and then report alarm to Hub immediately.<br />**The PIR will enter sleep mode for energy-saving.* |
|   **Alarm Status**    |                        Normal / Alarm                        | Shows whether the PIR is triggered.<br />**Alarm will only be triggered when PIR is armed.* |
|    **Lid Status**     |                      Normal / Triggered                      | Shows whether the lid of PIR is open or not.                 |
|  **Signal Strength**  | ![signal blue](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/signal%20blue.png) | Shows the signal strength between the PIR and the hub.       |
| **Connection Status** |                       Online / Offline                       | Shows the connection status between the PIR and the Hub.<br />**The PIR will not be functional if the status is offline.* |
|  **Battery Status**   | ![battery green](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/battery%20green.png) | Shows the battery level of PIR. <br />**If the battery level is low, the icon will turn red and you’ll receiver a malfunction notification in App.* |

#### 4.18.3 Setting

Click "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" on the top right corner and turn to “**Setting**”.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-pir/outdoor-pir-11.png" width="250" />
</div>


|      **Parameter**        |                          **Value**                           | **Meaning**                                                  |
| :----------------------:  | :----------------------------------------------------------: | ------------------------------------------------------------ |
|  **Basic Information**    |                              /                               | Check the basic information of this device, including MAC Address, Serial Number, etc. <br />And you can also edit the device name here by yourself. |
|       **Add Room**        | ![image-20231221233352230](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221233352230.png) | You can select one of the rooms created before and then link the PIR to.<br />**When linked to a specific room, the PIR will be displayed on the product list of the room, and the PIR could begin for detecting when the room is armed.* |
|       **Find Me**         |          | A function that used to find your PIR among numerous devices. When you enable this function, the indicator in PIR will flash green to help you find the target device quickly. |
| **Signal Strength Test**  | ![outdoor-pir-2](https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/outdoor-pir/outdoor-pir-2.png) | A function that used to check the signal strength between PIR and hub at the tested place, which is designed to help you choose the right place for installation. When you enable this function, you can check the signal strength by watching the indicator in PIR and the feedback in app. |
|  **Installation Test**    |          | A function that used to test whether the PIR is installed properly. When you enable this function, you can walk in the room to test if the PIR can detect and trigger an alarm properly. The indicator will flash red when it detects successfully. |
| **Tamper detection**      |                            ON / OFF                         | When the tamper detection is enabled, if the tamper switch is triggered while the hub is armed, an alarm will be triggered. |
| **Detection Sensitivity** |                    High / Medium / Low                      | Adjust sensitivity per actual installation environment to cut false & missed alarms and boost detection accuracy. |
| **Firmware Upgrade**      |          | The device supports firmware upgrade functionality and can be updated remotely over the air. The system periodically checks for version updates, allowing users to download and install firmware updates via the mobile app when the Hub is connected to the internet. |
|    **Disable Device**     |                           ON / OFF                           | If this button is ON, the alarm and malfunctions generated by this PIR will no longer be uploaded to the Hub and App.<br />**It is recommended that you disable the device only if it’s defective. Before turning on this function, please ensure that you are aware of the situation to avoid possible personal injury or property damage that may result from the device not detecting and triggering an alarm.* |
| **Display On Homepage**   |                           ON / OF                            | When enabled, the PIR will show up on homepage so that you can operate quickly. |
|      **User Guide**       |                              /                               | Click to check the user guide document of PIR.               |
|    **Delete Device**      |                              /                               | Delete the PIR from your hub.                                |


<br />

## Charter 5. User Management

### 5.1 User Type

There are two types of user in this system, named **APP User** and **Local User**.

#### 5.1.1 App User

Refer to the users who use APP to operate system and receive notifications, these users must be registered in RB Link APP, the APP users are classified into three types:

- **Super Admin:** The first user who adds the Hub in the APP.
- **Admin:** Can be invited by super admin from APP, and enabled as an admin.
- **Regular User:** Invited by super admin or admin from APP, enabled as a regular user

#### 5.1.2 Local User

Refer to the users do not use APP, but only use keypad and keyfob to operate system.

<br />

### 5.2 User Authority

<table class="center">
  <thead>
    <tr>
      <th rowSpan={3}>User Types</th>
      <th colSpan={3}>APP User</th>
      <th rowSpan={2}>Local User</th>
    </tr>
    <tr>
      <th>Super Admin</th>
      <th colSpan={1}>Admin</th>
      <th rowSpan={1}>Regular User</th>
    </tr>
    <tr>
      <th>1</th>
      <th>Up to 4</th>
      <th>Up to 32</th>
      <th>Up to 32</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Add Device</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Delete Device</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>System Configuration</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>System Operation</td>
      <td>√</td>
      <td>√</td>
      <td>√</td>
      <td>√</td>
    </tr>
    <tr>
      <td>Create/Del Room</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Create/Del Scene</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Operate Scene</td>
      <td>√</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Message Notification</td>
      <td>√</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Invite APP user (Admin)</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
      <td>×</td>
    </tr>
     <tr>
      <td>Invite APP user (Regular)</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
    <tr>
      <td>Add/Del Local User</td>
      <td>√</td>
      <td>√</td>
      <td>×</td>
      <td>×</td>
    </tr>
  </tbody>
</table>








> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - Super Admin and Admin users are linked to all rooms by default and cannot be modified.
> - Regular Users and Local Users’ room linkage can be set individually by super admin or admin, so their authorities to the system are also limited by their room authorities.
> - Super admin can configure admin and regular user.
> - Admin can only configure himself and regular user.



<br />

### 5.3 Manage Users

#### 5.3.1 App User Management

##### Share Hub to APP User:

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

##### Configure App User:

1. Once the sharing process has been successfully finished, enter **`User Management`** (Hub → "**Settings**" → "**User Management**"), the new user will be shown in the list.
2. Click the "![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png)" button on the right side of the user to configure user authorities.



<table class="center">
  <thead>
    <tr>
      <th colSpan={4}>APP User Settings Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={5}>Notification Settings</td>
      <td>Alarm</td>
      <td>APP/SMS/Phone Call</td>
      <td>To set the Hub to push notifications via APP, SMS or Phone Call if an alarm occurred.</td>
    </tr>
    <tr>
      <td>Malfunction</td>
      <td>APP/SMS/Phone Call</td>
      <td>To set the Hub to push notifications via APP, SMS or Phone Call if a malfunction occurred.</td>
    </tr>
    <tr>
      <td>Event</td>
      <td>APP</td>
      <td>To set whether APP should receive event notifications.</td>
    </tr>
    <tr>
      <td>Operation</td>
      <td>APP</td>
      <td>To set whether APP should receive operation notifications.</td>
    </tr>
    <tr>
      <td colspan={2}>Add Mobile</td>
      <td colspan="2">When SMS and Phone Call are selected, the Mobile must be added as a receiver.</td>
    </tr>
    <tr>
      <td colspan={3}>Keypad Code</td>
      <td>Set a code for the user to operate keypad </td>
    </tr>
    <tr>
      <td colspan={3}>Keyfob</td>
      <td>Assign a keyfob for the user</td>
    </tr>
    <tr>
      <td colspan={3}>Linked Room</td>
      <td>Assign room permissions for the user</td>
    </tr>
    <tr>
      <td colspan={4}>Delete User</td>
      </tr>
  </tbody>
</table>





> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - The detailed definition of notification **Alarm**, **Malfunction**, **Event**, **Operation**, will be elaborated in [Charter 7. Notification Management](#charter-7-notification-management) later.
> - SMS and Phone Call are only supported by Home Security Hub **R2 PRO**, not for **R2**.
> - For each notification, the Hub makes Phone Call and SMS to every user only once no matter successful or not.

#### 5.3.2 Local User Management

##### Add a Local User

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

## Charter 6. Scene Management

### 6.1 Security Scene

Security Scene allows you to carry out the default arming/disarming operation, as well as to create new custom arming scenes to meet daily safety needs.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222180300695.png" width="300" />
</div>





#### 6.1.1 Default Arming / Disarming

The app supports three default modes, which are **Arm Stay**, **Arm Away** and **Disarm**. You can also click these buttons in Homepage.

##### Arm Stay

When you get home, you can press "![Arm Stay](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Stay.png)" (Arm Stay) to let the system be armed partly. You can click "**>**" and then go to **Arm Stay setting** page and find two options can be configured:

- **Effective Device**

  Only the enabled sensors will be armed while the rest sensors keep disarmed (when you operate "![Arm Stay](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Stay.png)")

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222142859388.png" width="200" />
</div>


>  ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : Effective device only contains normal intrusion sensors, such as door magnetic sensor, PIR sensor, etc. The detectors such as water leak detector and smoke detector are 24-hour protection sensor and arming/disarming operation will not affect these devices.



- **Siren ON / OFF**

  If you turn off the siren, when alarm is triggered, there will be no alarm sound from all the siren for the hub. The default is ON.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222143109872.png" width="300" />
</div>


<br />

##### Arm Away

When you leave home, you can press "![Arm Away](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Arm%20Away.png)" (Arm Away) to let entire system be armed. You can also click "**>**" and then go to **Arm Away Setting** page and find two options can be configured:

- **Effective Device** (refer to [Arm Stay](#arm-stay))

  You need also notice that all the intrusion sensors will be enabled for Arm Away and you are not allowed to disable them.

- **Delay Setting**

  - **Entry Delay**: When you reture home, the system will delay to alarm in a certain time when sensor triggered, to allow you disarm system timely.
  - **Exit Delay**: When you leave home, the system will be delayed to arm in a certain time after you press Arm away, to allow you leave home timely.



> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : The delay time is from 10 seconds to 300 seconds. And when you enable the delay, the countdown will be shown below the button. The default entry and exit delay time is 20 seconds.

<br />

##### Disarm

When you are at home and want all intrusion sensor disarmed, you can press "![disarm button](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/disarm%20button.png)"(Disarm) button. In Disarm setting page, you can view which sensors will be effective when you press Disarm.

After disarming, all the alarm icon will be gone and siren sound will be stopped.

<br />

#### 6.1.2 Custom Arming

In addition to the default armings and disarming, you can also add up to three **Custom Arming Scenes**. 

For example, you can configure a **Night Mode** to make entrance and your yard monitored but bedroom not armed. After configuration, you can just one click in Homepage or Scene page to enable Night Mode.

You can press Add Custom Arming or go to Custom Arming setting page and find these options:

​            1.     **Effective Device.** Please refer to Arm Stay. (refer to [Effective Device](#arm-stay))

​            2.     **Delay Setting.** Please refer to Arm Away. (refer to [Delay Setting](#arm-away))

​            3.     **Siren.** Please refer to Arm Stay. (refer to [Siren ON/OFF](#arm-stay))

​            4.     **Homepage Display.** When enabled, the scene will be shown in Homepage, so that you can press the button easily. 

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222144105101.png" width="400" />
</div>


<br />

### 6.2 Custom Scene

There are two types of custom scenes:

- **Manual Click**

  When you create a Manual Click scene, it will shown on Scene page and you can press the scene to trigger it.

- **Automatic Triggering**

  When you create a Automatic Triggering scene, it will shown on Scene page. If the condition is triggered, an task will be executed automatically.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222144414027.png" width="200" />
</div>


#### 6.2.1 Create a Custom Scene

You can create up to **64** Custom Scenes for one Hub.

1. Turn to "![Scene](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Scene.png)" (Scene) page and then press "**+**" to add a custom scene.
2. Click "![scene icon](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/scene%20icon.png)" to select an icon you prefer and set a scene name.

#### 6.2.2 Add a Trigger Condition

There are **3** types of trigger condition:

- **Manual Click**

  Manual Click allows your to enable one scene with just one click. For instance, though several steps scene configration, you can press the Manual Click scene button to switch on lights in your different rooms (via our Relay).

  > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note**: *If you choose Manual Click, you can not select any other condition.*

- **Scheduled Execution**

  You can select the execution time (Day / Hour / Minute). 

  *For example, you can set a condition to power on a Smart Plug (connected with an appliance) every day at 7:00 AM.*

- **Smart Device**

  The condition can be a device status change. Please refer to the following table to check supported devices as condition. 

  | **Device Type**                | **Supported Trigger Condition**                              |
  | ------------------------------ | ------------------------------------------------------------ |
  | Smoke Detector                 | ● Smoke alarm triggered <br />● Smoke alarm restored         |
  | Door Magnetic Sensor           | ● Door opened<br />● Door closed                             |
  | PIR Sensor                     | ● PIR Sensor triggered<br />● PIR Sensor restored            |
  | Panic Button                   | ● Panic Button pressed                                       |
  | Water Leak Detector            | ● Water Leak detected<br />● Water Leak restored             |
  | Temperature & Humidity Monitor | ● Temperature ≤ <br />● Temperature ≥<br />● Humidity ≤ <br />● Humidity ≥<br />● xx ≤ Temperature ≤ xx ℃/℉<br />● xx ≤ Humidity ≤ xx |
  | Keypad                         | ● Fire alarm<br />● Medical alarm<br />● Panic alarm         |

>  **Note**: 
>
>  - Up to **8** trigger conditions can be added when you choose Scheduled Execution and Smart Devices for one scene.
>  - You can select the condition rule "**When any condition is met"** or "**when all conditions are met"** if there are multi trigger conditions added.



#### 6.2.3 Add an Execution Task

There are **3** types of execution task:

- **Smart Device**:

  The task can be a device status changes. Please refer to the following table to check supported devices as condition. 

  | **Device Type**        | **Supported Trigger Condition**                              |
  | ---------------------- | ------------------------------------------------------------ |
  | Relay                  | ● Power on<br />● Power off<br />● Reverse(Power on/ Power off) |
  | Wall Switch            | ● Power on<br />● Power off<br />● Reverse(Power on/ Power off) |
  | Smart Plug             | ● Power on<br />● Power off<br />● Reverse(Power on/ Power off) |
  | Indoor / Outdoor Siren | ● Sound<br />● Light<br />● Sound & Light                    |

  If you choose Smart Devices as one of the conditions, you can also configure the **Effective Time Period**.

  - All day or Specified Time Period. If you choose Specified Time Period, you can set Start Time and End Time. The End Time can be the next day.
  - You can set the scene to be executed everyday, or a specific day as you need.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222180423579.png" width="200" />
</div>




- **Arm**:

  - If you choose Manual Click or Scheduled Execution as one of trigger conditions, the task of Arm will be available to select.
  - The following arming type can be selected: Arm Stay, Arm Away, and Custom Arming scene you have configured before.

  *For example, you can set 8:00 AM as trigger condition and Arm Away as execution task. In this case, even you forget to arm the system when you leave home, the system will arm by itself automatically.*

- **Deferred Execution**:

  You can set a action delay before another Smart Device or Arm task. 

  If you insert a Deferred Execution (e.g. one minute) between two tasks, when a task is executed, another task will be executed one minute later.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : 
>
> - Deferred Execution cannot be the last task in one scene.
> - Maximum 59 minutes and 59 seconds can be set.

---



<br />

## Charter 7. Notification Management

### 7.1 Notification Type

In `Message` page, the received messages are classified into `Device` and `Share` in general, on the top of the page, by clicking to switch the contents.

#### 7.1.1 Device

It means the notifications are generated if status changed in system devices. It has 5 types, which are listed in below form, each type has an icon design to distinguish.

|  **Notification Types**  |                           **Icon**                           | **Definition**                                               |
| :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|        **Alarm**         | ![alarm](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/alarm.png) | All the alarm notifications in system, such as Intrusion alarm, Panic alarm, Fire alarm, and more |
|     **Malfunction**      | ![Malfunction](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Malfunction.png) | All the system fault notifications, such as Low battery, External power failure, Cellular lost, and more |
| **Malfunction Restored** | ![mal restore](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/mal%20restore.png) | All the system faults recovered to normal status             |
|        **Event**         | ![event](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/event.png) | Regular notifications, such as Hub is online / offline / updating, Scene auto-triggered, and more |
|      **Operation**       | ![Operation](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Operation.png) | System operation, such as Arm/Disarm, Scene manually-triggered, Automation device manually-triggered, Peripherals enable/disable |

#### 7.1.2 Share

It means the notifications are generated by user invitation process. Only when someone is sharing Hub to you, notifications will be received and agreed there.



> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *APP can only save notifications from latest two weeks, history over two weeks will be cleared.*

<br />

### 7.2 Notification Setting

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222002949593.png" width="300" />
</div>


- ![Setting](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/Setting.png): Enable / Disable whether to receive notifications from App;
- ![image-20231222003205182](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003205182.png): Quickly select the notifications you prefer to view;
- ![image-20231222003247445](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003247445.png): Set notifications as `All Read` or `Clear`.

---



<br />

## Charter 8. Installation Instruction

### 8.1 Hub Installation

#### 8.1.1 Noise Level

Ensuring the presence of acceptable wireless noise levels, you can check the data in app settings page. Path: Details of the Hub → `>` → `Wireless Noise Level`.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231222003432932.png" width="250" />
</div>

#### 8.1.2 Considerations

**DO NOT** place the hub:

- Outside the premises (outdoors).
- Nearby or inside any metal objects or mirrors causing attenuation and screening of the signal.
- In places with high radio interference level.
- Close to radio interference sources: less than 1 meter from the router and power cables.
- Inside any premises with the temperature and humidity beyond the range of permissible limits. The recommended temperature is -10~45 Celsius, humidity between 30%~70%.

<br />

### 8.2 Peripheral Installation

1. Check the detector’s installation position (indoor/outdoor)
2. Check the battery. Please navagate to device's status to check the battery level in app, you will receive a message when battery is low.
3. Check the LED indicator. The Hub's "**Fault Indicator**" will turn on when the detector's battery level is low.
4. Double check the Signal Strength.

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *You can turn to [Charter 4 Peripheral Setting](#charter-4-peripheral-setting) to learn how to determine the installation position with signal strength test.*

<br />For detailed information, please check the User Guide or please visit the link blow: [Roombanker YouTube Channel](https://www.youtube.com/@Roombanker)

> ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/note.png)**Note** : *Peripherals installation is recommended to pass the Walk Test. For the operation methods, please refer to [Charter 2.5.5 System Maintenance](#255-maintenance) for details.*

---



<br />

## Charter 9. Maintenance

### 9.1 Battery Replacement

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

