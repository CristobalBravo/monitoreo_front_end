import {Injectable} from '@angular/core';
import { state } from '@angular/animations';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [

  {
    label: 'Inicio',
    main: [
      {
        main_state: 'estadisticas',
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-dashboard'
      }
    ],
  },
  {
    label: 'Estadísticas',
    main: [
      {
        main_state: 'estadisticas',
        state: 'memory',
        short_label: 'D',
        name: 'Memoria',
        type: 'link',
        icon: 'fa fa-thermometer'
      },
      {
        main_state: 'estadisticas',
        state: 'browser',
        short_label: 'B',
        name: 'Navegadores',
        type: 'link',
        icon: 'fa fa-chrome',
      },
      {
        main_state: 'estadisticas',
        state: 'executionTime',
        short_label: 'n',
        name: 'Tiempo de Ejecución',
        type: 'link',
        icon: 'ti-timer'
      },
    ],
  },
  {
    label: 'Alertas',

    main: [
      {
        main_state: 'alertas',
        state: 'errores',
        short_label: 'B',
        name: 'Errores',
        type: 'link',
        icon: 'fa fa-exclamation-circle'
      }
    ]
  },
  {
    label: 'Sugerencias ',

    main: [
      {
        main_state: 'sugerencias',
        state: 'memoriaMaxima',
        short_label: 'M',
        name: 'Memoria máxima',
        type: 'link',
        icon: 'fa fa-thermometer-full'
      },
      {
        main_state: 'sugerencias',
        state: 'memoriaUsada',
        short_label: 'M',
        name: 'Memoria usada',
        type: 'link',
        icon: 'fa fa-thermometer-half'
      },
      {
        main_state: 'sugerencias',
        state: 'tiempoEjecucion',
        short_label: 'M',
        name: 'Tiempo ejecución',
        type: 'link',
        icon: 'ti-timer'
      },
    ]
  },
  {
    label: 'Configuraciones',
    main: [
      {
        main_state: 'configuraciones',
        state: 'usuario',
        short_label: 'M',
        name: 'Usuario',
        type: 'link',
        icon: 'ti-user',
        /*children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          },
        ]*/
      },
      {
        main_state: 'configuraciones',
        state: 'sugerencias',
        short_label: 'S',
        name: 'Sugerencias',
        type: 'link',
        icon: 'fa fa-comments-o'
      }
    ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
