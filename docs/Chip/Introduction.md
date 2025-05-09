 

 

# **RBF SIP Chip** 

## 1.  RBF SIP Chip Introduction

With the advent of the post-Moore era, the advanced manufacturing processes of integrated circuits are constantly approaching the physical limits and the "limits" of commercial rationality. The industry is paying more and more attention to the packaging link, and advanced packaging technology has also become a hot spot of current industry focus.

As Security alarm industry new brands, Roombanker is deeply engaged in the research and development of wireless narrowband protocols and antenna hardware design, Designed with highly integrated main control chip, RF front end, power management and other hardware circuits through SIP packaging technology SIP system-level advanced packaging chip-RB Series (RB4331/RB8681/RB9151）It plays a significant role in the continuous improvement of system performance and can meet the terminal companies' needs for "light, thin, short and small" component products and system integration.

## 2. Features and Advantages of RBF SIP Chip

**Main Features and advantages:**

- The RBF SIP chip integrates the three core circuits of main control chip, RF front end and power management into a highly integrated chip.10mm×10mm tiny package, Greatly reduces the packaging volume, which can save more than 40% of the board area and is more suitable for the design of small-size terminal equipment.
- RBF SIP chip Unlike SOC, it does not require layout-level layout and routing, thus reducing the complexity of design, verification and debugging and shortening the time for system implementation ,It can significantly shorten the time it takes for products to come to market.
- For security alarm sensor equipment integrated circuit system, using RBF SIP chip can save more system design and production costs than SOC.
- RBF SIP chip has an embedded wireless front-end circuit, and users only need to connect external matching wires to obtain excellent wireless performance, which can achieve up to3500m communication distance, and meet the wireless certification standards of various countries.
- RBF SIP Chip Good resistance to mechanical and chemical corrosion and high reliability.
- Due to the packaging characteristics of the RBF SIP chip, the internal routing of the chip is optimized to achieve highly optimized electrical performance. The current in standby mode is only 700nA, and this excellent low power consumption feature makes it easy to adapt to battery-powered application scenarios. For a large number of IoT terminal devices that are widely distributed and difficult to frequently replace batteries, such as various wireless sensor nodes, the low power consumption design of the RBF SiP chip greatly extends the battery life of the device.
- The RBF SIP chip has a wide temperature stabilization capability, capable of stable operation over a wide temperature range of -40°C to 85°C, providing excellent environmental adaptability.

## 3. Introduction to RBF SIP Chip Hardware Interface

### 3.1 Chip Packaging

The RBF SIP chip adopts LGA28 package, and the chip size is only 10mm x 10mm x 1.72mm.

![image-20250403173257605](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250403173257605.png)

![image-20250507135701215](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507135701215.png)

​                                       

### 3.2 Chip Pin Definition

The pin definition of the RBF SIP chip is as follows: it supports 1.71V~ 3.8VDC wide voltage input, has 21 configurable GPIO ports, and support the hardware interface like ADC, ACMP, VDAC, SPI, I2C, UART, PWM, PDM. And RF output power up to 20dBm.

![image-20250507135649461](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507135649461.png)

 

| Pin  Number | Pin  Name | I/O  Type | Function                                |
| ----------- | --------- | --------- | --------------------------------------- |
| 1           | GND       | P         | Chip power supply  ground               |
| 2           | VCC       | P         | Chip power supply  positive electrode   |
| 3           | PD3       | I/O       | Configurable GPIO  port                 |
| 4           | PD2       | I/O       | Configurable GPIO  port                 |
| 5           | GND       | P         | Chip power supply  ground               |
| 6           | GND       | P         | Chip power supply  ground               |
| 7           | PC0       | I/O       | Configurable GPIO  port                 |
| 8           | PC1       | I/O       | Configurable GPIO  port                 |
| 9           | PC2       | I/O       | Configurable GPIO  port                 |
| 10          | PC3       | I/O       | Configurable GPIO  port                 |
| 11          | PC4       | I/O       | Configurable GPIO  port                 |
| 12          | PC5       | I/O       | Configurable GPIO  port                 |
| 13          | PC6       | I/O       | Configurable GPIO  port                 |
| 14          | PC7       | I/O       | Configurable GPIO  port                 |
| 15          | RST       | I         | Chip reset pin, low  level is effective |
| 16          | PB0       | I/O       | Configurable GPIO  port                 |
| 17          | PB1       | I/O       | Configurable GPIO  port                 |
| 18          | GND       | P         | Chip power supply  ground               |
| 19          | ANT       | I/O       | RF antenna  interface                   |
| 20          | PB0       | I/O       | Configurable GPIO  port                 |
| 21          | PB1       | I/O       | Configurable GPIO  port                 |
| 22          | PB2       | I/O       | Configurable GPIO  port                 |
| 23          | PB3       | I/O       | Configurable GPIO  port                 |
| 24          | PB4       | I/O       | Configurable GPIO  port                 |
| 25          | PB5       | I/O       | Configurable GPIO  port                 |
| 26          | PB6       | I/O       | Configurable GPIO  port                 |
| 27          | PB7       | I/O       | Configurable GPIO  port                 |
| 28          | PB8       | I/O       | Configurable GPIO  port                 |

 

## 4. RBF SIP Chip Industry Applications

The RBF SIP chip has the characteristics of low power consumption, high stability, high integration, and strong wireless performance, making it suitable for the design and development of hardware equipment in multiple industries. It can be used in gateways and sub-devices to build wireless communications for the Internet of Things.

![image-20250507135430809](https://dusunprj.oss-us-west-1.aliyuncs.com/image-20250507135430809.png)

 

### 4.1 Wireless Security Field

As the core component of wireless security system, RBF SIP chip connects all kinds of security sensors, such as door and window magnetic sensors, human body infrared sensors, smoke alarms and so on. Through stable wireless communication, the information collected by the sensors is timely transmitted to the control center or user terminal. When doors and windows are opened abnormally, human infrared sensors detect trespassing, or smoke alarms are triggered, the system is able to send out alarms quickly to safeguard the security of homes and businesses. In the smart door lock application, RBF SIP chip realizes the wireless connection between the door lock and the wireless gateway, and supports functions such as remote unlocking and recording of unlocking logs, which improves the security and convenience of the home.

### 4.2 Smart Building Field

RBF SIP chips are widely used for wireless connection in all aspects of intelligent buildings, from lighting control systems, environmental monitoring devices to access control systems. In lighting control, through the wireless data interaction of intelligent sensors and control devices such as dimmers and switches, the lighting brightness is automatically adjusted according to the ambient light intensity and personnel activities, realizing the dual goals of energy saving and comfort; in environmental monitoring, real-time collection of indoor temperature, humidity, air quality and other data is collected and transmitted to the management system so that the environmental parameters can be adjusted in a timely manner; in the door access system In the access control system, it supports multiple ways of identity verification such as wireless card swiping and face recognition, and uploads the door opening records in real time to improve the safety and management efficiency of the building. In modern office buildings, employees can book meeting rooms remotely via mobile APP, and access control is automatically opened when they arrive, while indoor lighting and air conditioning systems are automatically adjusted according to the entry of personnel to enhance the office experience.

### 4.3 Industrial Internet of Things

RBF SIP chip plays a key role in the industrial Internet of Things and realizes remote monitoring and management of factory equipment. By connecting various industrial sensors (such as pressure sensors, temperature sensors, vibration sensors, etc.) and actuators, it collects equipment operation data in real time, such as equipment temperature, pressure, speed and other parameters, and transmits the data to the monitoring center. Once the equipment is abnormal, the system can issue an early warning in time to remind the staff to perform maintenance and avoid production interruptions caused by equipment failure. In automobile manufacturing plants, through RBF SIP .The chip enables real-time monitoring and remote control of various robots and equipment on the production line, improving production efficiency and product quality; in the energy industry, it conducts remote monitoring of oil pipelines, power equipment, etc. to ensure the stability of energy supply.

### 4.4 Smart Agriculture

RBF SIP chip can connect soil moisture sensors, weather stations, smart irrigation equipment, etc. to collect soil moisture, weather data and other information in real time, and automatically control the switch and water volume of the irrigation system based on these data to achieve precise irrigation, save water and increase crop yields. In greenhouse cultivation, by monitoring the temperature, humidity, light and other environmental parameters in the greenhouse, automatically adjust ventilation, shading, supplementary lighting and other equipment to create the best growth environment for crops., Realize precision and intelligent agricultural production.

## 5. RBF SIP Chip Development Resources

Roombanker provides a full set of hardware reference designs and industry software SDK. Help customers easily design support RBF Integrate products with the protocol into your own gateway, SDK support RTOS and OpenWRT Both systems call the same set of RBF Hub SDK interfaces, providing great convenience for developers.

### 5.1 Rich API Interface Resources

The RBF HUB SDK interface has various functions. In terms of initialization and configuration, RBF_INIT() is used to initialize the protocol stack to prepare for subsequent communication operations; RFB_DELINIT() releases resources and reduces system overhead when the software exits or the RBF function is no longer needed; RBF_SET_PORT() is used to set the physical interface (usually a serial port) for communication between the protocol stack and the RBF HUB module to ensure reliable data transmission. In terms of network management, a variety of network registration methods are provided, including local registration, MAC address registration, and SN registration. Local registration is suitable for the rapid access of large-scale devices to the network. The registration process can be started by sending a command through the AP panel. Procedure; MAC address registration and SN registration are for the precise access of a single device. After the user obtains the MAC address or SN number of the device, the registration can be completed by notifying RBF HUB. In terms of device control, RBF_DEVICE_LED_INDICATE_SET() can remotely set the LED indication status of the sub-device, so that users can understand the working status of the device; RBF_DEVICE_IO_ALARM_SET() is used to perform batch arming and disarming operations on I/O devices. Taking PIR sensors as an example, this interface can easily realize unified control of multiple PIR sensors. In terms of broadcasting and communication, it supports synchronous broadcasting and regular broadcasting, and also provides interfaces such as starting and stopping FINDME synchronous broadcasting (RBF_START_FINDME(), RBF_STOP_FINDME()), starting and stopping RSSI detection synchronous broadcasting (RBF_START_RSSI(), RBF_STOP_RSSI()), etc., which are convenient for users to locate devices and detect signal quality; for devices with continuous power supply, it also supports point-to-point communication to ensure fast and accurate data transmission. In terms of HUB configuration, RBF_SET_FREQ() can be used to modify the frequency band of the HUB module to adapt to different communication environments.

### 5.2 Complete Development Support System

Roombanker provides comprehensive development support for developers. The online document (HTTP://111.229.174.251/RBFSDK/HTML/INDEX.HTML) details the usage, interface parameters, application examples, etc. of the SDK, which is convenient for developers to check at any time; the offline document (currently inaccessible due to overseas web page restrictions, you can follow the official channels to obtain the latest information later) provides convenience for developers in an offline environment. In addition, the SDK also provides sample codes based on the ESP32 microcontroller (MAIN.C, RBFTEST.C). Developers can quickly master the use of the SDK by referring to these sample codes.Use methods to shorten the development cycle and accelerate the product launch process. In the actual development process, developers can contact us at any time if they encounter any problems. ROOMBANKER's technical support team provides professional technical guidance and solutions.

