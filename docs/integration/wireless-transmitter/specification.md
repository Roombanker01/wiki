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

<!--
<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/PIR.png" width="150" />
</div>
-->

## 1. Terminals for wired device connection

“+ -”     — 3.3V⎓ power supply output for connecting a wired device.<br />
“AO+ AO–” — outputs for connecting a wired device.<br />
ALARM     — inputs for connecting a wired device. <br />
TAMP      — inputs for connecting a tamper of a wired device. <br />

## 2. Features

**Remote setting and testing**
Setting and testing from RB Link App<br />

**Advanced features**
Power up enrolling<br />
When sensor is powered up, it will automatically start paring to the hub nearby<br />

**Find me**
When enabled, the sensor starts flashing green, which can help identify the sensor from numerous Transmitters.<br />

**Signal strength detection**
When enabled, senor starts flashing green/orange/red showing the wirelesssignal strength between the hub at current installation site.<br />

**Low battery notification**

**Indicators**
Alarm: Flashing Red<br />
Find me: Flashing Green<br />
Signal strength:<br />
> Flashing Green: signal strength is strong, and is recommended to install devicehere<br />
> Flashing orange: signal strength is medium and device can be installed here<br />
> Flashing Red : signal strength is bad or no signal, and device can not be installedhere<br />
