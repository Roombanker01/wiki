#  Transmitter

## 1. Appearance

## 2. Packaging List

## 3. Add Device

1. Click Home Security Hub, then click "+" and select "Add peripheral".<br />
2. Pull out the insulation strip to power up the device, the green indicator will flash and the device will show in the App.<br />
> Note: If the device does not show in the App and green indicator is off, please press and hold the register button for 5s to try again.<br />
3. Assign a room and click the "Done" to finish adding.<br />


## 4. Testing Instruction

- **Signal Strength Test** <br />
Click“Settings->Signal Strength Test”to check signal strength.<br />

- **Find me** <br />
Click“Settings->Find me”to check.<br />
The device indicator flashes green (1 second on / 1 second off) until the 30-second timeout expires.<br />

## 5. Installation Instruction

## 6. Working Principle

Transmitter is a module for integrating a third-party wired device into the Roombanker system. Transmitter allows you to connect the detectors, keypad, panic button, or any other device with the NC/NO contact type to Roombanker. Transmitter can output the NC/NO signal to the third-party device.<br />

## 7. Base Operation

### 7.1. Terminals for wired device connection

|Parameter    |Value                                                    |
|-------------|---------------------------------------------------------|
|**+ –**      |3.3 V⎓ power supply output for connecting a wired device.|
|**AO+ AO-**  |Outputs for connecting a wired device.                   |
|**ALARM**    |Inputs for connecting a wired device.                    |
|**TAMP**     |Inputs for connecting a tamper of a wired device.        |

### 7.2. Device configuration

|Parameter                             |Value             |
|--------------------------------------|------------------|
|Power supply for input devices        |1. **Always enabled**(Keep output under any circumstances)<br/>2.**Disabled if disarmed** (Cut off power output in disarmed state)<br/>3.**Always Disabled**(Cut off output under any circumstances)|
|Output contact states                 |1.**Normal Close:NC** (Under normal circumstances, a low - level output is provided. In case of an alarm, a high - level output is provided for x seconds. This is the default mode.)<br/>2.**Normal Open:NO** (Under normal circumstances, a high - level output is provided. In case of an alarm, a low - level output is provided for x seconds.)<br/>3.**DISABLE** (Turn off this function. A low - level output is provided under any circumstances. The lid status on the Individual Device Status Page shows 'off'.)<br/>Remarks: <br/>**x value**：0 represents continuous output, and 1 - 255s indicates the duration of continuous output. |
|External device contact states        |1.**Normal Close: NC** (A normally - closed signal input indicates a normal state; an alarm is triggered otherwise.)<br/>2.**Normal Open: NO** (A normally - open signal input indicates a normal state; an alarm is triggered otherwise. This is the default mode.)|
|Tamper states                         |1.**Normal Close: NC**(A normally - closed signal input indicates a normal condition; an alarm is triggered otherwise. This is the default mode.)<br/>2.**Normal Open: NO**(A normally - open signal input indicates a normal condition; an alarm is triggered otherwise.)<br/>3.**DISABLE**: (Turn off this function. Any changes in the input signal will not be reported, and the lid status on the Individual Device Status Page will show "disabled".) |
|External detector type                |**Bistable**, **Pulse**   |

### 7.3. Event types

|NO.|Type      |Value                     |
|---|----------|--------------------------|
|1  |Event     |Tamper                    |
|2  |Device    |Intrusion                 |
|3  |Device    |Fire                      |
|4  |Device    |Auxiliary alarm           |
|5  |Device    |Panic button              |
|6  |Device    |Gas alarm                 |
|7  |Device    |Leakage                   |
|8  |Device    |Glass break               |
|9  |Device    |High temperature          |
|10 |Device    |Low temperature           |
|11 |Device    |Masking                   |
|12 |Device    |Duress code (opening)     |
|13 |Device    |Vibration (seismic sensor)|
|14 |Device    |Custom                    |

## 8. Device Specifications
|Parameter                  |Value                                            |
|---------------------------|-------------------------------------------------|
|Model                      |RBAD-TR1-868\RBAD-TR1-915                        |
|Advanced Features          |Signal Strength detection， Find me              |
|Transmission Technology    |RBF Wireless Transmission                        |
|Transmission Frequency     |868/915 MHz                                      |
|Cable length               |130m                                             |
|Wireless signal range      |Up to 1,500 m in an open space with hub          |
|Advanced Tech              |AES-128 Encryption,FHSS,TDMA                     |
|LED Indicator              |1                                                |
|Device certifications      |FCC/CE/RoHS                                      |
|Operation Temperature      |From-20°Cto +65°C(-4°F to 149°F)                 |
|Operation Humidity         |Up to 90%                                        |
|Storage Temperature        |From -20°C to 65°C (-4°F to 149°F)               |
|Maximum Operating Current  |<br/>                                            |
|Quiescent Current          |<br/>                                            |
|Dimension (W x H x D)      |100mm x 41mm x 23mm                              |
|Weight                     |33g(No battery)                                  |
|Power Supply               |CR123A Battery x 3                               |
|User Serviceable Parts     |External plug：Battery CR123A x 3                |
|Application Scenario       |Indoor                                           |

