/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
      className:'bolder',
    },
    {
      type: "doc",
      id: "user-manual",
      label: "User Manual",
      className:'bolder',
    },
    {
      type: "category",
      label: "Central Units",
      className:'bolder',
      collapsed: true,
      items: [
       // ============Smart Hub===============
        {
          type: "category",
          label: "Smart Hub",
          items: [
            {
              type: "doc",
              id: "central-units/smart-hub/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "central-units/smart-hub/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Motion Sensor",
      className:'bolder',
      collapsed: true,
      items: [
       // ============Smart Hub===============
        {
          type: "category",
          label: "PIR Sensor",
          items: [
            {
              type: "doc",
              id: "motion-sensor/pir-sensor/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "motion-sensor/pir-sensor/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Door Sensor",
      className:'bolder',
      collapsed: true,
      items: [
       // ============Smart Hub===============
        {
          type: "category",
          label: "Door Magnetic Sensor",
          items: [
            {
              type: "doc",
              id: "door-sensor/door-magnetic-sensor/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "door-sensor/door-magnetic-sensor/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Panic Button",
      className:'bolder',
      collapsed: true,
      items: [
       // ============Smart Hub===============
        {
          type: "category",
          label: "Emergency Button",
          items: [
            {
              type: "doc",
              id: "panic-button/emergency-button/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "panic-button/emergency-button/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Environmental Monitoring Sensor",
      className:'bolder',
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Temperature Humidity Monitor",
          items: [
            {
              type: "doc",
              id: "environmental-monitoring-sensor/temperature-humidity-monitor/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "environmental-monitoring-sensor/temperature-humidity-monitor/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Water Leak Detector",
          items: [
            {
              type: "doc",
              id: "environmental-monitoring-sensor/water-leak-detector/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "environmental-monitoring-sensor/water-leak-detector/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Smoke Sensor",
          items: [
            {
              type: "doc",
              id: "environmental-monitoring-sensor/smoke-sensor/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "environmental-monitoring-sensor/smoke-sensor/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Alarm Siren",
      className:'bolder',
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Indoor Alarm Siren",
          items: [
            {
              type: "doc",
              id: "alarm-siren/indoor-alarm-siren/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "alarm-siren/indoor-alarm-siren/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Outdoor Alarm Siren",
          items: [
            {
              type: "doc",
              id: "alarm-siren/outdoor-alarm-siren/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "alarm-siren/outdoor-alarm-siren/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Control Device",
      className:'bolder',
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Keypad",
          items: [
            {
              type: "doc",
              id: "control-device/keypad/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "control-device/keypad/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Keyfob",
          items: [
            {
              type: "doc",
              id: "control-device/keyfob/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "control-device/keyfob/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Automation Device",
      className:'bolder',
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Relay",
          items: [
            {
              type: "doc",
              id: "automation-device/relay/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "automation-device/relay/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Wall Switch",
          items: [
            {
              type: "doc",
              id: "automation-device/wall-switch/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "automation-device/wall-switch/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Smart Plug",
          items: [
            {
              type: "doc",
              id: "automation-device/smart-plug/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "automation-device/smart-plug/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
        {
          type: "category",
          label: "Heating Thermostat",
          items: [
            {
              type: "doc",
              id: "automation-device/heating-thermostat/specification",
              label: "Specification",
            },
            {
              type: "doc",
              id: "automation-device/heating-thermostat/quick-start-guide",
              label: "Quick Start Guide",
            },
          ]
        },
      ],
    }
  ],
};

module.exports = sidebars;
