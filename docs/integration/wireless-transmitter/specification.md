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

Tramsmitter is a module for integrating a third-party wired device into the Roombanker system. Transmitter allows you to connect the detectors, keypad, panic button, or any other device with the NC/NO contact type to Roombanker. Tramsmitter can output the NC/NO signal to the third-party device.<br />


<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/RBGW/pic/transmitter/transmitter-front.png" width="150" />
</div>


## 1. Terminals for wired device connection

### Terminals for wired device connection

| Param   | Description                                                |
| ------- | ---------------------------------------------------------- |
| + -     | 3.3V⎓ power supply output for connecting a wired device.   |
| AO+ AO- | Outputs for connecting a wired device.                     |
| ALARM   | Inputs for connecting a wired device.                      |
| TAMP    | Inputs for connecting a tamper of a wired device.          |

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
|No.|Type     |Name                             |
|---|---------|---------------------------------|
|1  |Event    |Tamper                           |
|2  |Device   |Intrusion                        |
|3  |Device   |Fire                             |
|4  |Device   |Auxiliary alarm                  |
|5  |Device   |Panic button                     |
|6  |Device   |Gas alarm                        |
|7  |Device   |Leakage                          |
|8  |Device   |Glass break                      |
|9  |Device   |High temperature                 |
|10 |Device   |Low temperature                  |
|11 |Device   |Masking                          |
|12 |Device   |Duress code (opening)            |
|13 |Device   |Vibration (seismic sensor)       |
|14 |Device   |Custom                           |

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

### Wireless signal modulation
- FSK/DSSS

### Encrypted communication
- All the data transmitted are protected by AES-CCM encryption with a random key.<br />

### Frequency hopping (FHSS)
- To prevent radio interference and radio signal interception.<br />

### Time division multiple access (TDMA)
- With the help of clock synchronization technology, hub will slice time into differentdivision for different RBF wireless devices. In this way, all devices will communicatewith hub in a sequence.<br />

## 4. Electrical characteristic
### Power Supply
- CR123A Battery x 3<br />

## 5. General
### Operation Temperature
- From-20°Cto +65°C(-4°F to 149°F)<br />

### Operation Humidity
- up to 90%<br />

### Storage Temperature
- From -20°C to 65°C (-4°F to 149°F)<br />

### Dimensions
- 100mm x 41mm x 23mm<br />

### Weight
- 33g(No battery)<br />

## 6. Compatibility
- Operates with all Roombanker Home Security Hubs, RBF repeaters.<br />

## 7. Complete set
|Product            |Quantity  |
|-------------------|----------|
|Transmitter        |  x1      |
|Quick Start Guide  |  x1      |

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
