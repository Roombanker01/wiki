# Door Magnetic Sensor

<div style={{textAlign: 'center'}}>
<button onClick={() => window.print()} style={{ display: 'inline-block', backgroundColor: '#92D050', color: '#ffffff', padding: '10px 30px',cursor:'pointer', textDecoration: 'none', borderRadius: '4px' }}>Download Spec</button>
</div>

<br />

<center>
    Last update: December 23th, 2023.
</center>

<br />

The surface-mounted door magnetic sensor always monitor the opening and closing status of doors, and signals the Smart Hub.

<div align="center">
  <img src="https://dusunprj.oss-us-west-1.aliyuncs.com/roombanker/Door%20Magnetic%20Sensor.png" width="200" />
</div>




------

## 1. Detection Performance

### Detection method

* Reed switch


### Detection Gap

* &gt; 17 mm

------

## 2. Features

### Door Status detection

* Door Open   

  > *Alarm will be triggered when system is armed.*
* Door Closed

### Tamper Protection

* Rear
### Remote setting and testing

* Setting and testing from RB Link App
### Advanced features

* Power up enrolling  

  > *When sensor is powered up, it will automatically start paring to the hub nearby*
* Find me  

  > *When enabled, the sensor starts flashing green, which can help identify the sensor from numerous door magnetic sensors.*
* Signal strength detection  

  > *When enabled, senor starts flashing green/orange/red showing the wireless signal strength between the hub at current installation site.* 
* Low battery notification
### Indicators

* Alarm: Flashing `Red`
* Find me: Flashing `Green`
* Signal strength: 
  * Flashing `Green`: signal strength is strong, and is recommended to install device here
  * Flashing `Orange`: signal strength is medium and device can be installed here
  * Flashing `Red`: signal strength is bad or no signal, and device can not be installed here


------

## 3. RBF wireless technology
### Wireless signal range
* Up to **1,900 m** in an open space with hub
* Two-way communication with hub
### Frequency bands

* 868MHz version: 863 ~ 870 MHz
* 915MHz version: 902 ~ 928 MHz  

  > *Depends on sales region.*
### Wireless signal modulation
* FSK / DSSS
### Encrypted communication
* All the data transmitted are protected by AES-CCM encryption with a random key.

### Frequency hopping (FHSS)
* To prevent radio interference and radio signal interception.

### Time division multiple access (TDMA)
* With the help of clock synchronization technology, hub will slice time into different division for different RBF wireless devices. In this way, all devices will communicate with hub in a sequence.

------

## 4. Electrical Characteristic

### Power Supply
* AA Battery × 1
* Up to 5.5 years (standby mode)

------

## 5. General
### Operation Temperature
* From -10°С to +55°С (14°F to 131°F)

### Operation Humidity

* From 10% to 90%
### Storage Temperature
* From -20°C to 60°C (-4°F to 140°F)
### Dimension(WxHxD)
* Body: 82mm x 42mm x 16mm
* Magnet: 82mm x 11mm x 18mm

### Weight

* 55.6g

------

## 6. Compatibility
* Operates with all Roombanker Home Security Hubs,  RBF repeaters.

## 7. Complete set

| Product                              | Quantity |
| ------------------------------------ | -------- |
| Door Magnetic Sensor (Body & Magnet) | × 1      |
| Quick Start Guide                    | × 1      |



------

## 8. Additional information

### Available models

* RBSS-MC1-868
* RBSS-MC1-915

### Certifications

* CE
* FCC

### Warranty
* Replacement and repair within 24 months of the date of sale. Batteries are not covered under warranty.
