---
description: Wireless converter serves as a signal adaptation unit between wired devices and wireless systems. It supports two-way conversion of wired and wireless signals, resolving the common issues of impossible on-site wiring and legacy alarm hosts without wireless capability.
title: Custom transmitter Supplier
keywords:
- transmitter
tags:
- Transmitter spec
---
  
# Transmitter

<div style={{textAlign: 'center'}}>
<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '10px 30px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Download Spec</button>
</div>
<br />

<center>
    Last update: June 20th, 2026.
</center>
<br />

Tramsmitter is a module for integrating a third-party wired device into the Roombanker system.<br />Transmitter allows you to connect the detectors, keypad, panic button, or any other device with the NC / NO contact type to Roombanker. Transmitter links to the gateway via the RBF protocol, once transmitter receives a signal from the third-party device, it will send this message to gateway, gateway will arrange the next action.<br />Tramsmitter can output a 3.3 V / 30 mA power to the third-party device.<br />Tramsmitter can output a NC / NO signal to the third-party device to achieve a certain function.<br />


<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/transmitter/transmitter-front.png" width="350" />
</div>


## 1. Terminals for wired device connection

### Terminals for wired device connection

| Param   | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| + -     | 3.3 V / 30 mA power supply output for connecting a wired device.     |
| PO+ PO- | Programmable output, open-collector, need external pull-up resistor. |
| ALARM   | Inputs for connecting a wired device.                                |
| TAMP    | Inputs for connecting a tamper of a wired device.                    |

### Output contact states
- NO, NC<br />

### Third-party device contact states
- NO, NC<br />

### Tamper contact states
- NO, NC<br />

### Cable length
- Up to 130 m<br />

### Operating modes
- Bistable, Pulse<br />

### Event types
|NO.|Type      |Value                     | Meaning                                                       |
|---|----------|--------------------------|---------------------------------------------------------------|
|1  |Device    |Intrusion                 |Trigger an alarm on motion, door/window opening, or activation of other detectors.|
|2  |Device    |Fire                      |Generate an alarm when fire detectors are activated.|
|3  |Device    |Auxiliary alarm           |Trigger an alarm when the auxiliary request button is pressed.|
|4  |Device    |Panic button              |Activate an alarm upon pressing the panic button.|
|5  |Device    |Gas alarm                 |Alarm when gas concentration is exceeded.|
|6  |Device    |Leakage                   |Alarm triggered by water leakage detectors.|
|7  |Device    |Glass break               |Alarm triggered by the glass break sensor.|
|8  |Device    |High temperature          |Trigger an alarm when the upper temperature limit is exceeded.|
|9  |Device    |Low temperature           |Activate an alarm when the lower temperature limit is breached.|
|10 |Device    |Masking                   |Alarm triggered when device masking is detected.|
|11 |Device    |Duress code (opening)     |Alarm upon entry of duress code.|
|12 |Device    |Vibration                 |Alarm when the vibration sensor is activated.This event type is only available under Pulse mode.|
|13 |Device    |Custom                    |User-configurable event type. This event is not transmitted to the security company’s monitoring station.|

## 2. Features
### Remote setting and testing
Setting and testing from RB Link App<br />

### Advanced features
- Power up enrolling
When device is powered up, it will automatically start paring to the hub nearby<br />

- Find me
When enabled, the device starts flashing green, which can help identify the sensor from numerous devices.<br />

- Signal strength detection
When enabled, senor starts flashing green/orange/red showing the wirelesssignal strength between the hub at current installation site.<br />

- Low battery notification

### Indicators
- Alarm: Flashing Red
- Find me: Flashing Green
- Signal strength:
> Flashing Green: signal strength is strong, and is recommended to install devicehere<br />
> Flashing orange: signal strength is medium and device can be installed here<br />
> Flashing Red : signal strength is bad or no signal, and device can not be installedhere<br />

## 3. RBF wireless technology
### Wireless signal range
- Up to 1,500 m in an open space with hub
- Two-way communication with hub

### Frequency bands
- 868MHz version: 863 ~ 870 MHz
- 915MHz version: 902 ~ 928 MHz
- Depends on sales region.

## 4. Electrical characteristic
### Power Supply
- CR123A Battery x 3<br />

### Calculated battery life
- Up to 5 years<br />

### Nrominal Operating Voltage
- 3 V <br />

### Quiescent current consumption at nominal voltage
- 11 uA<br />

### Maximum current consumption at nominal voltage
- 72 mA<br />

### Operating Voltage
- From 2.5 V to 3.3 V<br />

### Power supply output
- 3.3 V / 30 mA<br />

## 5. General
### Operation Temperature
- From -20 °C to + 65 °C(-4 °F to 149 °F)<br />

### Operation Humidity
- Up to 90%<br />

### Storage Temperature
- From -20 °C to 65 °C (-4 °F to 149 °F)<br />

### Dimensions
- 100 mm x 41 mm x 23 mm<br />

### Weight
- 33 g(No battery)<br />

## 6. Compatibility
- Operates with all Roombanker Home Security Hubs, RBF repeaters.<br />

## 7. Complete set
|Product            |Quantity  |
|-------------------|----------|
|Transmitter        |  x1      |
|Quick Start Guide  |  x1      |
|CR123A Battery     |  x3      |
|PCB standoff       |  x4      |


## 8. Additional information
### Available models
- RBAD-TR1-868
- RBAD-TR1-915

### Certifications
- CE
- FCC
- ROHS

## Warranty
Replacement and repair within 24 months of the date of sale. Batteries are not covered under warranty.<br />
