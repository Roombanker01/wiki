# Roombanker User Manual



# **Overview**

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

![Topology](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Topology.png)



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



# **Charter 2. Start Up Hub**

## 2.1 App Installation

1. Scan the QR code below or search "RB Link" in Google Play or App Store to download and install the App.

   ![image-20231221181603900](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/image-20231221181603900.png)

2. Register and log in to your account (with email) by following the instructions in the app.

   > ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** : *as of now, e-mail is the only supported method for account registration*

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
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/User%20Manual/image-20231221201418121.png" width="200" />
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



### 2.5.3 System



### 2.5.4 Communication



### 2.5.5 Maintenance



### 2.5.6 User Guide



# Charter 3. Room Management

## 3.1 Create and manage rooms



### 3.1.1 Create a room



### 3.1.2 Rename a room



### 3.1.3 Delete a room



### 3.1.4 View Peripherals in a specific room



# **Charter** 4. Peripheral Setting



## 4.1. Adding peripherals



### Option 1: Adding via QR Code



### Option 2: Adding via Enrollment Mode



<br />

## 4.2 Peripheral Icons



<br />

## 4.3 PIR Sensor

### 4.3.1 Appearance



### 4.3.2 State



### 4.3.3 Setting



<br />

## 4.4 Door Magnetic Sensor

### 4.4.1 Appearance



### 4.4.2 State



### 4.4.3 Setting



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



<br />

# Charter 5. User Management

## 5.1 User Type



### 5.1.1 App User



### 5.1.2 Local User



<br />

## 5.2 User Authority







<br />

## 5.3 Manage Users

### 5.3.1 App User Management





### 5.3.2 Local User Management



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



<br />

# Charter 7. Notification Management

## 7.1 Notification Type



<br />

## 7.2 Notification Setting



<br />

# Charter 8. Installation Instruction

## 8.1 Hub Installation



<br />

### 8.1.1 Noise Level



### 8.1.2 Considerations



<br />

## 8.2 Peripheral Installation





<br />

# Charter 9. Maintenance



