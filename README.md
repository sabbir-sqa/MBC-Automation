# MBC-Automation
This will be complete End to End Automation Framework testing of our MBC SaaS Project using Playwright and JS

## Folder structure

```
mbc-playwright-framework/
│
├── tests/                       # Test files
│   ├── ui/
│   │   ├── login.spec.js
│   │   └── property.spec.js
│   └── api/
│       └── user-api.spec.js
│
├── pages/                       # POM classes
│   ├── LoginPage.js
│   └── PropertyPage.js
│
├── utils/                       # Helper functions
│   ├── dataManager.js
│   └── logger.js
│
├── config/                      # Environment configs
│   ├── stage.config.json
│   └── prod.config.json
│
├── reports/                     # Allure reports
│
├── fixtures/                    # Custom fixtures
│
├── data/                        # Static data files
│   ├── users.csv
│   └── properties.json
│
├── playwright.config.js         # Playwright global config
└── package.json
```