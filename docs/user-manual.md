# Roombanker User Manual



# **Overview**

## **Purpose of the Manual**

The main purpose of the manual contains three parts:

● To introduce the features and specifications of Roombanker Security Product System

● To introduce how to register, configure and operate the devices from RB Link APP

● To introduce the installation and function test method of the whole system



## **Scope of the Manual**

All the functions described in the manual are based on the products and version showing in the form below. You may find some functions cannot be achieved if your devices are not the latest version, please check your devices version and update to the latest from APP if so.

| **Device name and latest available version** |             |                                |             |
| -------------------------------------------- | ----------- | ------------------------------ | ----------- |
| **Device**                                   | **Version** | **Device**                     | **Version** |
| Gateway (Station)                            | v1.0.0      | PIR Sensor                     |             |
| Gateway (Pico)                               | v1.0.0      | Panic Button                   |             |
| Keypad                                       | 子设备版本  | Door Magnetic Sensor           |             |
| Relay                                        |             | Water Leak Detector            |             |
| Wall Switch                                  |             | Temperature & Humidity Monitor |             |
| Indoor Siren                                 |             | Smoke Detector                 |             |
| Outdoor Siren                                |             | RB Link APP                    |             |
| Keyfob                                       |             |                                |             |
| Smart Plug (US)                              |             |                                |             |
| Smart Plug (EU)                              |             |                                |             |
| Smart Plug (UK)                              |             |                                |             |
| Smart Plug (IT)                              |             |                                |             |

<br />

<br />

## **Symbol Conventions**

| **Symbol**                                                   | **Description**                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![Danger](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Danger.png)**Danger** | Indicates a hazardous situation which, if not avoided, will or could result in death or serious injury. |
| ![caution](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/caution.png)**Caution** | Indicates a hazardous situation which, if not avoided, will or could result in equipment damage or performance degradation. |
| ![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png)**Note** | Provides additional information to emphasize or supplement important points of the main text. |

<br />

<br />

# **Charter 1. System Introduction**

## **Overview of the System**

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

![note](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/note.png) **Note**

**RBF** is a self-developed encrypted wireless protocol by Roombanker, aim to enhance the communication between devices, the transmission range is up to 3,500m in open area. It contains advanced technologies design, such as TDMA, Frequency Hopping, Power Adjustment, Multi-Band Transmission with Low Power, to guarantee a stable, secure, highly efficient wireless communication.

<br />

## **System Key Features**

● Ultra-long range, reliable transmission

● Reliable alarm protection, day and night

● Multi-mode arming/disarming

● Instant alarm and real-time notification

● Manage smart devices with just one APP

● Esay installation & Easy DIY

<br />

## **Spec of** **Hub**

Home security Hub has two different models, called **Station** and **Pico**, below form describes the brief comparison between two models.

| **Specifications**      | **Home Hub (Pico)**                               | **Home Hub (Station)** |
| ----------------------- | ------------------------------------------------- | ---------------------- |
| Transmission Technology | RBF                                               | RBF/Zigbee 3.0/BLE     |
| Transmission Method     | Two-way wireless (RBF)                            |                        |
| Transmission Frequency  | 868/915MHz (RBF)                                  |                        |
| Transmission Security   | AES128 Encryption (RBF)                           |                        |
| Peripherals Connected   | Up to 64                                          | Up to 128              |
| Users                   | 1 Super Admin+4 Admin+32 App Users+32 Local Users |                        |
| Cellular                | /                                                 | 1 SIM (4G)             |
| Wi-Fi                   | 2.4G，802.11 b/g/n                                |                        |
| Ethernet                | 1 x RJ45, 10/100Mbps                              |                        |
| Firmware Upgrade        | OTA via APP                                       |                        |
| Power Supply            | Type-C，5VDC 2A                                   |                        |
| Battery                 | /                                                 | 2600mAh 18650 battery  |
| Backup time             | /                                                 | Up to 8h power backup  |
| Weight                  | 260g                                              | 320g                   |
| Operation Temperature   | -10℃~+45℃                                         |                        |
| Dimension (W×H×D)       | 150mm x 150mm x 37mm                              |                        |
