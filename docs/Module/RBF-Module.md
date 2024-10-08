# RBF Wireless Communication Module

## Product Model: DSM-140/141

**Revision History**

| Rev. | Date       | Update Description  |
| ---- | ---------- | ------------------- |
| 1.0  | 2024-09-27 | New version release |
|      |            |                     |
|      |            |                     |

## 1. Product Description

### 1.1 Purpose and Description

The RBF wireless module is a high-performance wireless data transmission module for IOT applications based on the EFR32 chip from Silicon Labs. It features compact size, low power consumption, ultra-long communication range, high security, anti-interference performance, etc. It can be used in all kinds of long-range applications through secondary development and various application scenarios with high requirements for data transmission security and stability.

Excellent RF communication distance and low power consumption to meet a variety of customer needs, complete integrated RF solutions for customers to shorten the development cycle, customers can devote more time to the development of terminal applications.

In addition, RBF provides multiple options in frequency (433 / 868 / 915 MHz) for more than 90% of the countries and regions around the world.

![1](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/RBF%20Module/1.png)


### 1.2 Product Feature Summary

* Low-power CE/RED approved wireless module with ultra-low power consumption, support to be powered by battery easily.
* Up to 3.5km communication range (in open space), supporting both Star Connection and Mesh Connection for networking, with a huge capacity of up to 10,000 peripherals.
* Safer and more reliable data transmission with the edge-cutting technologies (FHSS, TDMA, and AES-CCM+Encryption, etc).
* Low-code Development with encapsulated protocol stack and easy-to-use APIs, help accelerate the process of production rapidly.
* OTA Multicast technology supports to transfer firmware to multiple peripherals simultaneously.

### 1.3 Typical Application

* Wireless Meter Reading System (Water meter, gas meter, heat meter, electricity meter, etc)
* Wireless Security System in House/Villa, Office, Retail and other SMB scenarios
* Electric Vehicles and Charging Points
* Smart Apartment (Express Cabinet, Smart Lock, etc)
* Industrial Automation

## 2. Product Detail

### 2.1 Interface and Dimension

![2](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/RBF%20Module/2.png)

### 2.2 Topology & Usage

![3](https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/RBF%20Module/3.png)


## 3. Specification
<table class="center">
  <thead>
    <tr>
      <th>Model</th>
      <th>DSM-140-868<br />For Gateway</th>
      <th>DSM-141-868<br />For IOT Nodes</th>
      <th>DSM-140-915<br />For Gateway</th>
      <th>DSM-141-195<br />For IOT Nodes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Processor</td>
      <td colspan="4" style={{textAlign: 'center'}}>Silicon Labs EFR32</td>    
    </tr>
    <tr>
      <td>Frequency Band</td>
      <td colspan="2" style={{textAlign: 'center'}}>863 MHz ~ 870 MHz</td>    
      <td colspan="2" style={{textAlign: 'center'}}>902 MHz ~ 928 MHz</td> 
    </tr>
    <tr>
      <td>Antenna Option</td>
      <td colspan="4" style={{textAlign: 'center'}}>U.FL, RF pad</td>    
    </tr>
    <tr>
      <th>RAM</th>
      <th>64KB</th>
      <th>32KB</th>
      <th>64KB</th>
      <th>32KB</th>
    </tr>
    <tr>
      <th>Flash</th>
      <th>512KB</th>
      <th>256KB</th>
      <th>512KB</th>
      <th>256KB</th>
    </tr>
    <tr>
      <td>RF Data Rate</td>
      <td colspan="4" style={{textAlign: 'center'}}>2 kbps ~ 100 kbps</td>    
    </tr>
    <tr>
      <td>Transmit Range (Open Area)</td>
      <td colspan="4" style={{textAlign: 'center'}}>Up to 3.5 km with -1.92 dBi antenna</td>    
    </tr>
    <tr>
      <td>Transmit Power</td>
      <td colspan="4" style={{textAlign: 'center'}}>Max. 20dBm</td>    
    </tr>
    <tr>
      <td>Receiver Sensitivity</td>
      <td colspan="4" style={{textAlign: 'center'}}>-113.3 dBm @ 38.4 kbps</td>    
    </tr>
    <tr>
      <td>Spectrum Utilization</td>
      <td colspan="4" style={{textAlign: 'center'}}>FHSS</td>    
    </tr>
    <tr>
      <td>Modulation</td>
      <td colspan="4" style={{textAlign: 'center'}}>FSK Narrowband / DSSS Spreading</td>    
    </tr>
    <tr>
      <td>Digital I/O</td>
      <td colspan="4" style={{textAlign: 'center'}}>21-ch Digital I/O</td>    
    </tr>
    <tr>
      <td>Analog Input</td>
      <td colspan="4" style={{textAlign: 'center'}}>21-ch Analog Inputs</td>    
    </tr>
    <tr>
      <td>Networking Topology</td>
      <td colspan="4" style={{textAlign: 'center'}}>Star Connection / Mesh Connection</td>    
    </tr>
    <tr>
      <td>Encryption</td>
      <td colspan="4" style={{textAlign: 'center'}}>AES-CCM+Random Number Key</td>    
    </tr>
    <tr>
      <td>Image Transmit</td>
      <td colspan="4" style={{textAlign: 'center'}}>Support</td>    
    </tr>
    <tr>
      <td>OTA</td>
      <td colspan="4" style={{textAlign: 'center'}}>Multicast OTA, Background Upgrading</td>    
    </tr>
    <tr>
      <td>Supply Voltage</td>
      <td colspan="4" style={{textAlign: 'center'}}>1.7 V ~ 3.8V</td>    
    </tr>
    <tr>
      <td>Transmit Current</td>
      <td colspan="4" style={{textAlign: 'center'}}>Max. 85.5 mA</td>    
    </tr>
    <tr>
      <td>Receive Current</td>
      <td colspan="4" style={{textAlign: 'center'}}> 3.7 mA</td>    
    </tr>
    <tr>
      <td>Sleep Current</td>
      <td colspan="4" style={{textAlign: 'center'}}> 2 μA</td>    
    </tr>
    <tr>
      <td>Dimension Current</td>
      <td colspan="4" style={{textAlign: 'center'}}>17 mm (W) × 22 mm (H) × 4 mm (D)</td>    
    </tr>
    <tr>
      <td>Weight</td>
      <td colspan="4" style={{textAlign: 'center'}}>DSM-140: 1.7g/DSM-141: 1.8g</td>    
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colspan="4" style={{textAlign: 'center'}}>-40 °C ~ 85 °C (-40 ℉ ~ 185 ℉)</td>    
    </tr>
    <tr>
      <td>Storage Temperature</td>
      <td colspan="4" style={{textAlign: 'center'}}>-40℃ ~ 125℃ (-40 ℉ ~ 257 ℉)</td>    
    </tr>
    <tr>
      <td>ETSI (Europe)</td>
      <td colspan="4" style={{textAlign: 'center'}}>CE/RED</td>    
    </tr>
    <tr>
      <td>RoHS</td>
      <td colspan="4" style={{textAlign: 'center'}}>Compliant</td>    
    </tr>     
  </tbody>
  </table>

## 4. QA Requirement

| Information Description | Standard(Yes) Custom(No) |
| ----------------------- | ------------------------ |
| ESD Testing             | Yes                      |
| RF Antenna Analysis     | Yes                      |
| Environmental Testing   | Yes                      |
| Reliability Testing     | Yes                      |
| Certification           | FCC,CE, RoHS             |



## 5. Package Information

| Parameter        | Value         |
| ---------------- | ------------- |
| Packing Type     | Tape Reel     |
| Packing Quantity | 100 pcs/ tape |







