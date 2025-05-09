 

 

# RBF Protocol

Protocol version: V1.0.3

Release time: 2025-3-12

## 1.  Introduction to RBF Protocol



As wireless communication technology continues to evolve, the demand for long-distance, low-power and high-security communication protocols is becoming increasingly prominent.  RBF technology came into being.  As an excellent Two-way wireless communication protocol, it has shown unique application value in many fields. In the smart home security system, it realizes the reliable interaction between the home security hub and wireless peripheral devices; in commercial places, such as retail stores, it can effectively cover a large area to ensure the stable operation of the security system. Compared with the common ZigBee and Lora standard protocols, the RBF protocol performs well in long-distance, high-security and high-speed data transmission, while consuming less power, and is more suitable for residential and small and medium-sized commercial environments. Intrusion alarm security and smart home application scenarios.

Hangzhou Roombanker Technology, as an innovative enterprise under Dusun IoT focusing on the field of smart home security, has developed a unique RBF protocol stack with its deep accumulation in wireless communication technology, bringing new solutions to smart home security and related fields.

## 2.  What is the RBF protocol?

RBF is a SuB-1G Communication technology, using TDMA (Time Division Multiple Access) Transceiver mechanism, suitable for long distance , Low power consumption, high-security LAN communication.

**Key Features:**

- Strong anti-interference ability: Adopt TMDA (Time Division Multiple Access) modulation mode, support 50 channels of FM
- Remote control: Effective control distance up to 3.5 kilometers
- High security: use AES-CCM Data encryption
- Power Adaptation : Supports automatic power adjustment according to actual scenarios, optimized power consumption, and static power consumption is less than 2uA
- Strong reliability: The protocol is simple, reliable and highly scalable
- Completely independent development: with independent intellectual property rights
- Easy to deploy: Flexible adaptation to multiple operating systems: RTOS/OpenWRT, etc., standard MQTT protocol fast implementation Cloud server connection

## 3.  RBF Protocol Network topology

This protocol Mainly supports star network , the network topology is shown in the figure below. There are two roles in the network: RFM and Gateway–HUB. The cloud server communication part is implemented by specific application services and is not covered by this agreement.

Subsequent protocol versions will add relay nodes (Repeater Node).

​                             ![image-20250507104254401](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104254401.png)

## 4.  RBF Protocol Architecture

The network architecture of the protocol application is shown in the figure below. From the bottom to the top, they are the physical layer, link (MAC)Layer, network layer and application layer. The description is as follows:

Physical layer: Based on Siliconlabs RF chip, The RBF protocol uses FSK and FHSS modulation modes as the basis of protocol data communication.

Link layer: responsible for implementing the sending and receiving logic, providing functions such as retransmission, collision detection, and network access. The link layer provides interfaces for the upper network layer. Using these interfaces, the network layer can complete related operations on the radio frequency without paying attention to how these operations are implemented.

Network layer: responsible for network protocol control, data packaging and unpacking, network address resolution, various mode management, data encryption, etc.

Application layer: mainly some specific business logic, such as peripheral management ,API interface, OTA upgrade.

![image-20250507104329245](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104329245.png)

 

### 4.1.   Physical Layer Introduction

The current maximum message length of the physical layer of the RBF protocol is tentatively 255bytes.

FSK, is a digital modulation technology. It represents digital signals by changing the carrier frequency, such as using different frequencies to represent "0" and "1". It has the advantages of simple implementation and strong anti-interference ability, and is often used in wireless communication, audio communication and other fields.

DSSS, is a spread spectrum technology used in wireless communications. It adds the signal to be transmitted to a high-speed pseudo-random sequence in modulo-two to expand the signal's spectrum. It has the advantages of strong anti-interference ability, good confidentiality, and strong multiple access capability.

### 4.2.   Introduction to the Link Layer (MAC Layer)

#### 4.2.1. Network Handshake

Developers can use the SDK interface to easily implement the function of device access to the target network, which can provide stable and reliable network access support, ensure that the device is quickly and accurately connected to the network, and lay the foundation for subsequent data interaction and function realization.

The network access flow chart is as follows:

  ![image-20250507104407745](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104407745.png)

 

#### 4.2.2. Collision Detection

Collision detection mechanism: The hardware ensures that the noise floor is fixed. RFM determines whether the current channel is idle based on the change in signal strength. If it is idle, data is packaged and sent. If it is busy, it backs off. If it is always busy, it will back off until it times out.

 ![image-20250507104416381](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104416381.png)

 

#### 4.2.3. Time Division Multiple Access



![image-20250507104429701](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104429701.png)

 

The Hub can plan channels (unit: ms) by broadcasting or responding. The planning width is related to the baud rate.

The calculation formula is roughly ( (6+4)bytes*4 Preamble + 66bytes Payload ) *8 / kbps * 2 + 5ms

Ack Delay (TBT) + 5ms protect slot;

1) 42kbps: 20ms*2 + 5 + 5 = 50ms
2) 10kbps: 84.8ms*2+5+5 = 180ms, reducing the preamble length and payload length to 1/4
3) 2.4kbps: 353ms*2 +5+5 = 720ms, which requires greatly reducing the preamble length and payload length to1/16

### 4.3.   Introduction to the Network Layer

The RBF protocol supports the following four sub-network modes:

- Model A: The lowest power consumption mode, the terminal node generates active reporting events on demand, competes for access to the channel, and caches data downlink when the Hub responds; it wakes up only when an event is reported and sleeps the rest of the time, with the lowest power consumption;
- Mode B: Synchronous uplink mode, the terminal node needs to periodically uplink and synchronize the time and slot with the Hub.
- Random sequence frequency hopping and support for time division multiple access greatly improve system capacity;
- Mode C: Synchronous monitoring mode, in Mode Based on B, in order to meet the business needs of real-time downlink of low-power terminal nodes, the terminal periodically opens the receiving window, 2s synchronous wake-up monitoring cycle, and the average current is < 10uA@38.4kbps ;
- Mode D: Full-speed working mode, used by terminal nodes that are not sensitive to power consumption, and can communicate symmetrically with the Hub in both directions, the most real-time downlink.

Model A, Model B, and Model C are suitable for low-power devices, and Model D is suitable for constant power supply equipment.

The main processes supporting the above four network modes include RFM active reporting process, Hub actively sends, Data Broadcasting .The process is as follows:

#### 4.3.1.     RFM Auto-reports

The active reporting mode supports two-way communication, but it must be initiated by an RFM terminal device. After the terminal device sends a message, a short receiving window will be opened. The Hub needs to reply or issue instructions within this receiving window.

 ![image-20250507104748331](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104748331.png)

#### 4.3.2.     Hub pushes info

The Hub is directly linked to the long power supply device and can initiate point-to-point communication to the permanent power supply device in real time, thus achieving real-time two-way communication.

 ![image-20250507104801847](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104801847.png)

#### 4.3.3.     Data Broadcasting

Using the broadcast function, developers can implement device data broadcasting. In some scenarios where multiple devices need to work together, the synchronous broadcast function can ensure that all devices receive the same instructions or data, improving the system's data transmission efficiency.

 ![image-20250507104826348](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104826348.png)

### 4.4.   Application Layer Introduction

#### 4.4.1.     OTA Update

Developers can Remotely upgrade the device's firmware without having to manually replace the device's hardware or perform complex offline operations, the following is a diagram of the upgrade process.

![image-20250507104836711](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104836711.png)

 

#### 4.4.2.     Low Power Management

Enter/Exit Low Power Consumption: In order to meet the power consumption requirements of devices in different application scenarios, an interface for devices to enter and exit low power consumption mode is provided. When the device does not need to process a large amount of data or communicate, the developer can call the interface to put the device into low power consumption mode, reduce the power consumption of the device, and extend the battery life of the device. When the device needs to resume normal operation, call the interface to make the device exit low power consumption mode to ensure that the device can respond to various operations and instructions in a timely manner..

 

## 5.  RBF Protocol Application 

### 5.1.   Roombanker Smart Alarm Kit

The Roombanker smart alarm kit is a comprehensive smart home solution built by Hangzhou Roombanker Technology based on the RBF protocol stack. The kit integrates a variety of sensors, such as door and window magnetic sensors, intrusion detection sensors, as well as alarms and smart control devices. The core of the system is the self-developed RBF communication protocol, which achieves efficient collaboration between various devices with its long-distance coverage, high penetration and low power consumption. Through coordination at the main control center, the home environment can be fully monitored and automatically managed. Users can remotely control and monitor anytime, anywhere through mobile phone applications to keep abreast of the safety status of their homes. For example, when the door and window magnetic sensors detect that the doors and windows are abnormally opened, the alarm signal will be immediately sent through the RBF protocol stack. The information is transmitted to the main control center, which then pushes it to the user's mobile phone and triggers the alarm to sound an alarm, effectively protecting the safety of family members.

 ![image-20250507104940872](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507104940872.png)

### 5.2.   Roombanker Smart Commercial Security Solution

In the commercial field, Hangzhou Roombanker Technology uses the RBF protocol stack to provide intelligent commercial security solutions for retail stores, commercial office buildings and other places. By deploying security equipment based on the RBF protocol stack, such as smart cameras and intrusion detectors, all-round monitoring of commercial places can be achieved. The long-distance communication capability of the RBF protocol stack ensures that in large commercial buildings, devices in every corner can maintain a stable connection with the control center. For example, in a large shopping mall, security equipment distributed on different floors and areas transmits real-time monitoring data to the control center through the RBF protocol stack. Managers can use the monitoring system to keep abreast of the security situation in the mall, respond quickly to potential safety hazards, and ensure the property safety and normal operation of commercial places.

 ![image-20250507105113552](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507105113552.png)

## 6.  RBF Protocol Version Planning

The current version of the RBF protocol is: Roombanker Technology continues to optimize the protocol and add relay nodes, data compression and spread spectrum technology in subsequent protocol versions.

| Protocol Version | illustrate                                                   | Release time   |
| ---------------- | ------------------------------------------------------------ | -------------- |
| V1.0.0           | BETA Version, internal test version                          | 2023-1-5       |
| V1.0.1           | Support OTA upgrade, increase  synchronization request type, add batch synchronization | 2024-1-10      |
| V1.0.2           | Added PIR and water valve sub-device object  model applications, changed synchronous broadcast to two-way broadcast,  supported point-to-point operation and returned operation results | 2023-3-20      |
| V1.0.3           | Redefine the interval configuration of the  working status light of the outdoor alarm; add production test and support RBF  Protocol Switching | 2025-3-12      |
| V2.0.0           | The protocol network topology adds relay  nodes to support long-distance expansion | To be released |
| V3.0.0           | Increase data compression rate, protocol  spread spectrum, support image transmission | To be released |

 

## 7.  Noun Description

**PANEL**: specifically refers to the Hub device of the Internet of Things;

**HUB:** This article specifically refers to the central aggregation node in the star network using the RBF protocol, which is integrated on the PANEL;

**RFM:** refers to the terminal node using the RBF protocol;

 