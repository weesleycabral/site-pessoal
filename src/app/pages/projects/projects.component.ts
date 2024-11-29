import { Projects } from './../../models/projects';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  angularPath = 'M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z';
  flutterPath = 'M156.64 0L0 156.64l45.09 45.09L246.82 0H156.64z M45.09 201.73L90.18 246.82 246.82 90.18h-90.18L45.09 201.73z M156.64 246.82L111.55 201.73 156.64 156.64h90.18L156.64 246.82z M111.55 201.73L0 313.27h90.18L201.73 201.73h-90.18z';
  javaPath = 'M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z';
  projects: Projects[] = [
    {
      title: 'Web Pokedex',
      subtitle: 'Pokedex desenvolvida em Angular, consumindo a PokeAPI. É possível navegar pelos Pokemons separados por geração e realizar pesquisas por nome. \n Ao selecionar um Pokemon, o usuário tem acesso a informações detalhadas, como tipo, diferentes fotos como a da forma shiny, habilidades e estatísticas. ',
      // description: 'Consiste em uma Web Pokedex que consome a PokeAPI, proporcionando aos usuários uma experiência envolvente na busca e exploração de Pokemons. Através da aplicação, é possível navegar pelos Pokemons separados por geração e realizar pesquisas por nome. Ao selecionar um Pokemon, o usuário tem acesso a informações detalhadas, como tipo, diferentes fotos como a da forma shiny, habilidades e estatísticas.',
      icon: this.angularPath,
      iconColor: '#DD0031',
      linkGithub: 'https://github.com/weesleycabral/web-pokedex'
    },
    {
      title: 'Parking API',
      subtitle: 'API de estacionamento de carros. Desenvolvida com Java/Spring Boot e armazenando dados no MySQL ',
      // description: 'Consiste em uma Web Pokedex que consome a PokeAPI, proporcionando aos usuários uma experiência envolvente na busca e exploração de Pokemons. Através da aplicação, é possível navegar pelos Pokemons separados por geração e realizar pesquisas por nome. Ao selecionar um Pokemon, o usuário tem acesso a informações detalhadas, como tipo, diferentes fotos como a da forma shiny, habilidades e estatísticas.',
      icon: this.javaPath,
      iconColor: '#FF8040',
      linkGithub: 'https://github.com/weesleycabral/parking-api'
    },
    {
      title: 'TODO',
      subtitle: 'Aplicativo de lista de tarefas (To-Do List) desenvolvido em Flutter',
      description: 'Ele permite que os usuários adicionem, editem e excluam tarefas. Os dados são armazenados localmente no dispositivo.',
      icon: this.flutterPath,
      iconColor: '#02569B',
      linkGithub: 'https://github.com/weesleycabral/todo'
    },
    {
      title: 'Hotel Reservation',
      subtitle: 'Este projeto permite a gestão de clientes, reservas e quartos de um hotel através de uma API RESTful.',
      // description: 'Ele permite que os usuários adicionem, editem e excluam tarefas. Os dados são armazenados localmente no dispositivo.',
      icon: this.javaPath,
      iconColor: '#FF8040',
      linkGithub: 'https://github.com/weesleycabral/HotelReservationAPI'
    },
    {
      title: 'Cálculo de IMC',
      subtitle: 'Aplicativo de cálculo de IMC desenvolvido em Flutter',
      description: 'O aplicativo permite que o usuário insira seu peso e altura e, em seguida, calcula o IMC e exibe o resultado.',
      icon: this.flutterPath,
      iconColor: '#02569B',
      linkGithub: 'https://github.com/weesleycabral/imc-flutter'

    }

  ];

}
