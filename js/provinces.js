import { COUNTRIES } from './countries.js';

// Локальная схематическая карта: геометрия встроена в код, сетевые запросы не выполняются.
// Это игровая иллюстрация, а не точные административные границы. Координаты — локальные единицы карты.
export const provinces = [
  {
    "id": "UKR-01",
    "name": "Львовская область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            255.0,
            425.0
          ],
          [
            300.0,
            397.0
          ],
          [
            345.0,
            405.0
          ],
          [
            345.0,
            455.0
          ],
          [
            305.0,
            475.0
          ],
          [
            265.0,
            462.0
          ],
          [
            255.0,
            425.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-02",
    "name": "Киевская область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            300.0,
            397.0
          ],
          [
            355.0,
            390.0
          ],
          [
            395.0,
            405.0
          ],
          [
            390.0,
            455.0
          ],
          [
            345.0,
            455.0
          ],
          [
            345.0,
            405.0
          ],
          [
            300.0,
            397.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-03",
    "name": "Черниговская область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            355.0,
            390.0
          ],
          [
            405.0,
            392.0
          ],
          [
            430.0,
            415.0
          ],
          [
            420.0,
            455.0
          ],
          [
            390.0,
            455.0
          ],
          [
            395.0,
            405.0
          ],
          [
            355.0,
            390.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-04",
    "name": "Одесская область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            265.0,
            462.0
          ],
          [
            305.0,
            475.0
          ],
          [
            345.0,
            455.0
          ],
          [
            390.0,
            455.0
          ],
          [
            385.0,
            505.0
          ],
          [
            345.0,
            530.0
          ],
          [
            300.0,
            515.0
          ],
          [
            260.0,
            492.0
          ],
          [
            265.0,
            462.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-05",
    "name": "Днепропетровская область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            390.0,
            455.0
          ],
          [
            420.0,
            455.0
          ],
          [
            450.0,
            470.0
          ],
          [
            440.0,
            510.0
          ],
          [
            405.0,
            525.0
          ],
          [
            385.0,
            505.0
          ],
          [
            390.0,
            455.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-06",
    "name": "Донецкая область",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            420.0,
            455.0
          ],
          [
            455.0,
            440.0
          ],
          [
            480.0,
            465.0
          ],
          [
            470.0,
            495.0
          ],
          [
            440.0,
            510.0
          ],
          [
            450.0,
            470.0
          ],
          [
            420.0,
            455.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "UKR-07",
    "name": "Крым",
    "countryId": "UKR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            345.0,
            530.0
          ],
          [
            370.0,
            535.0
          ],
          [
            390.0,
            555.0
          ],
          [
            375.0,
            575.0
          ],
          [
            350.0,
            568.0
          ],
          [
            335.0,
            548.0
          ],
          [
            345.0,
            530.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "UKR",
    "controller": "UKR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "BLR-01",
    "name": "Гродненская область",
    "countryId": "BLR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            345.0,
            315.0
          ],
          [
            370.0,
            292.0
          ],
          [
            398.0,
            300.0
          ],
          [
            395.0,
            335.0
          ],
          [
            375.0,
            350.0
          ],
          [
            350.0,
            340.0
          ],
          [
            345.0,
            315.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "BLR",
    "controller": "BLR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "BLR-02",
    "name": "Минская область",
    "countryId": "BLR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            398.0,
            300.0
          ],
          [
            430.0,
            292.0
          ],
          [
            455.0,
            310.0
          ],
          [
            448.0,
            345.0
          ],
          [
            420.0,
            355.0
          ],
          [
            395.0,
            335.0
          ],
          [
            398.0,
            300.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "BLR",
    "controller": "BLR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "BLR-03",
    "name": "Витебская область",
    "countryId": "BLR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            430.0,
            292.0
          ],
          [
            465.0,
            300.0
          ],
          [
            480.0,
            325.0
          ],
          [
            465.0,
            350.0
          ],
          [
            448.0,
            345.0
          ],
          [
            455.0,
            310.0
          ],
          [
            430.0,
            292.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "BLR",
    "controller": "BLR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "BLR-04",
    "name": "Брестская область",
    "countryId": "BLR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            350.0,
            340.0
          ],
          [
            375.0,
            350.0
          ],
          [
            395.0,
            335.0
          ],
          [
            420.0,
            355.0
          ],
          [
            405.0,
            378.0
          ],
          [
            370.0,
            375.0
          ],
          [
            345.0,
            358.0
          ],
          [
            350.0,
            340.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "BLR",
    "controller": "BLR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "BLR-05",
    "name": "Гомельская область",
    "countryId": "BLR",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            420.0,
            355.0
          ],
          [
            448.0,
            345.0
          ],
          [
            465.0,
            350.0
          ],
          [
            458.0,
            375.0
          ],
          [
            435.0,
            390.0
          ],
          [
            405.0,
            378.0
          ],
          [
            420.0,
            355.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "BLR",
    "controller": "BLR",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-01",
    "name": "Псковская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            470.0,
            260.0
          ],
          [
            500.0,
            220.0
          ],
          [
            545.0,
            225.0
          ],
          [
            550.0,
            270.0
          ],
          [
            520.0,
            292.0
          ],
          [
            480.0,
            285.0
          ],
          [
            470.0,
            260.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-02",
    "name": "Ленинградская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            500.0,
            220.0
          ],
          [
            545.0,
            185.0
          ],
          [
            595.0,
            195.0
          ],
          [
            600.0,
            235.0
          ],
          [
            550.0,
            270.0
          ],
          [
            545.0,
            225.0
          ],
          [
            500.0,
            220.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-03",
    "name": "Тверская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            550.0,
            270.0
          ],
          [
            600.0,
            235.0
          ],
          [
            640.0,
            245.0
          ],
          [
            635.0,
            290.0
          ],
          [
            590.0,
            310.0
          ],
          [
            520.0,
            292.0
          ],
          [
            550.0,
            270.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-04",
    "name": "Московский регион",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            600.0,
            235.0
          ],
          [
            645.0,
            220.0
          ],
          [
            685.0,
            240.0
          ],
          [
            680.0,
            280.0
          ],
          [
            635.0,
            290.0
          ],
          [
            640.0,
            245.0
          ],
          [
            600.0,
            235.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-05",
    "name": "Смоленская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            480.0,
            285.0
          ],
          [
            520.0,
            292.0
          ],
          [
            550.0,
            315.0
          ],
          [
            535.0,
            350.0
          ],
          [
            490.0,
            340.0
          ],
          [
            465.0,
            310.0
          ],
          [
            480.0,
            285.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-06",
    "name": "Брянская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            490.0,
            340.0
          ],
          [
            535.0,
            350.0
          ],
          [
            555.0,
            375.0
          ],
          [
            530.0,
            400.0
          ],
          [
            490.0,
            385.0
          ],
          [
            470.0,
            360.0
          ],
          [
            490.0,
            340.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-07",
    "name": "Курская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            535.0,
            350.0
          ],
          [
            590.0,
            345.0
          ],
          [
            610.0,
            370.0
          ],
          [
            590.0,
            400.0
          ],
          [
            555.0,
            405.0
          ],
          [
            530.0,
            400.0
          ],
          [
            555.0,
            375.0
          ],
          [
            535.0,
            350.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-08",
    "name": "Белгородская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            590.0,
            345.0
          ],
          [
            635.0,
            335.0
          ],
          [
            660.0,
            360.0
          ],
          [
            650.0,
            390.0
          ],
          [
            610.0,
            400.0
          ],
          [
            590.0,
            400.0
          ],
          [
            610.0,
            370.0
          ],
          [
            590.0,
            345.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-09",
    "name": "Воронежская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            635.0,
            290.0
          ],
          [
            680.0,
            280.0
          ],
          [
            720.0,
            300.0
          ],
          [
            715.0,
            345.0
          ],
          [
            660.0,
            360.0
          ],
          [
            635.0,
            335.0
          ],
          [
            650.0,
            310.0
          ],
          [
            635.0,
            290.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-10",
    "name": "Ростовская область",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            650.0,
            390.0
          ],
          [
            690.0,
            375.0
          ],
          [
            730.0,
            390.0
          ],
          [
            720.0,
            420.0
          ],
          [
            680.0,
            430.0
          ],
          [
            650.0,
            415.0
          ],
          [
            650.0,
            390.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-11",
    "name": "Поволжье",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            685.0,
            240.0
          ],
          [
            735.0,
            210.0
          ],
          [
            790.0,
            220.0
          ],
          [
            800.0,
            270.0
          ],
          [
            760.0,
            300.0
          ],
          [
            720.0,
            300.0
          ],
          [
            680.0,
            280.0
          ],
          [
            685.0,
            240.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-12",
    "name": "Урал",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            790.0,
            220.0
          ],
          [
            850.0,
            190.0
          ],
          [
            905.0,
            205.0
          ],
          [
            920.0,
            255.0
          ],
          [
            875.0,
            285.0
          ],
          [
            800.0,
            270.0
          ],
          [
            790.0,
            220.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-13",
    "name": "Север России",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            595.0,
            195.0
          ],
          [
            650.0,
            155.0
          ],
          [
            720.0,
            145.0
          ],
          [
            755.0,
            180.0
          ],
          [
            735.0,
            210.0
          ],
          [
            685.0,
            240.0
          ],
          [
            645.0,
            220.0
          ],
          [
            600.0,
            235.0
          ],
          [
            595.0,
            195.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-14",
    "name": "Северо-Восток",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            720.0,
            145.0
          ],
          [
            805.0,
            125.0
          ],
          [
            895.0,
            140.0
          ],
          [
            905.0,
            175.0
          ],
          [
            850.0,
            190.0
          ],
          [
            790.0,
            220.0
          ],
          [
            755.0,
            180.0
          ],
          [
            720.0,
            145.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-15",
    "name": "Западная Сибирь",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            905.0,
            175.0
          ],
          [
            970.0,
            155.0
          ],
          [
            1030.0,
            180.0
          ],
          [
            1040.0,
            225.0
          ],
          [
            990.0,
            255.0
          ],
          [
            920.0,
            255.0
          ],
          [
            905.0,
            205.0
          ],
          [
            905.0,
            175.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-16",
    "name": "Восточная Россия",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            1030.0,
            180.0
          ],
          [
            1090.0,
            205.0
          ],
          [
            1120.0,
            250.0
          ],
          [
            1100.0,
            295.0
          ],
          [
            1060.0,
            320.0
          ],
          [
            1040.0,
            275.0
          ],
          [
            1040.0,
            225.0
          ],
          [
            1030.0,
            180.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-17",
    "name": "Южный Урал",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            875.0,
            285.0
          ],
          [
            920.0,
            255.0
          ],
          [
            990.0,
            255.0
          ],
          [
            1000.0,
            295.0
          ],
          [
            960.0,
            325.0
          ],
          [
            900.0,
            320.0
          ],
          [
            875.0,
            285.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-18",
    "name": "Среднее Поволжье",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            760.0,
            300.0
          ],
          [
            800.0,
            270.0
          ],
          [
            875.0,
            285.0
          ],
          [
            900.0,
            320.0
          ],
          [
            860.0,
            350.0
          ],
          [
            800.0,
            345.0
          ],
          [
            760.0,
            330.0
          ],
          [
            760.0,
            300.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-19",
    "name": "Нижнее Поволжье",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            720.0,
            345.0
          ],
          [
            760.0,
            330.0
          ],
          [
            800.0,
            345.0
          ],
          [
            820.0,
            380.0
          ],
          [
            790.0,
            405.0
          ],
          [
            730.0,
            390.0
          ],
          [
            690.0,
            375.0
          ],
          [
            720.0,
            345.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  },
  {
    "id": "RUS-20",
    "name": "Юг России",
    "countryId": "RUS",
    "adminLevel": 1,
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            680.0,
            430.0
          ],
          [
            720.0,
            420.0
          ],
          [
            760.0,
            435.0
          ],
          [
            790.0,
            460.0
          ],
          [
            750.0,
            475.0
          ],
          [
            705.0,
            460.0
          ],
          [
            680.0,
            430.0
          ]
        ]
      ]
    },
    "sourceProperties": {
      "geometryType": "hand-drawn-schematic"
    },
    "owner": "RUS",
    "controller": "RUS",
    "population": null,
    "economy": null,
    "infrastructure": null,
    "cities": [],
    "buildings": [],
    "armies": []
  }
];
export const byId = new Map(provinces.map(p => [p.id, p]));

export async function loadProvinces(onProgress = () => {}) {
  onProgress('Подготавливаем встроенную схематическую карту…');
  for (const p of provinces) {
    if (!COUNTRIES[p.countryId]) throw new Error(`Неизвестная страна у провинции ${p.id}`);
  }
  if (new Set(provinces.map(p => p.id)).size !== provinces.length) throw new Error('Обнаружены повторяющиеся ID провинций.');
  return provinces;
}

export function provinceSearch(query) {
  const term = String(query || '').trim().toLocaleLowerCase('ru');
  if (!term) return [];
  return provinces.filter(p => p.name.toLocaleLowerCase('ru').includes(term) || p.id.toLowerCase().includes(term)).slice(0, 30);
}

export function featureCollection() {
  return { type: 'FeatureCollection', features: provinces.map(p => ({ type: 'Feature', id: p.id, properties: { id: p.id, name: p.name, countryId: p.countryId }, geometry: p.geometry })) };
}
