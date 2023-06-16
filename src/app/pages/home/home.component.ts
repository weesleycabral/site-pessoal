import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  palavras = ["Front end Developer"];
  nome = ["Wesley Lima"];

  palavrasMotrar = "";
  nomeMotrar = "";

  public totalTime = 0;

  constructor() {}

  ngOnInit() {
    // const titulo = document.querySelector('.h1');
    this.typeWriter();
  }

  typeWriter() {
    const todasPalavras = this.palavras[0].split("");
    const todasNome = this.nome[0].split("");

    let indexN = 0;
    let indexP = 0;

    const typeWriterLoop = () => {
      let firstInt = setInterval(() => {
        this.nomeMotrar += todasNome[indexN];
        indexN++;

        if (indexN > todasNome.length) {
          clearInterval(firstInt);

          this.nomeMotrar = "";
          indexN = 0;

          let newInt = setInterval(() => {
            this.palavrasMotrar += todasPalavras[indexP];
            indexP++;

            if (indexP > todasPalavras.length) {
              this.palavrasMotrar = "";
              indexP = 0;

              clearInterval(newInt);

              typeWriterLoop();
            }
          }, 200);
        }
      }, 200);
    };

    typeWriterLoop();
  }
}
