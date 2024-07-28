import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  question: string = 'Quel est ce département ?';
  departementRep :string | undefined ;
  departements: string[] = [
    "Ain", "Aisne", "Allier", "Alpes-de-Haute-Provence", "Hautes-Alpes",
    "Alpes-Maritimes", "Ardèche", "Ardennes", "Ariège", "Aube", "Aude",
    "Aveyron", "Bouches-du-Rhône", "Calvados", "Cantal", "Charente",
    "Charente-Maritime", "Cher", "Corrèze", "Corse-du-Sud", "Haute-Corse",
    "Côte-d'Or", "Côtes-d'Armor", "Creuse", "Dordogne", "Doubs", "Drôme",
    "Eure", "Eure-et-Loir", "Finistère", "Gard", "Haute-Garonne", "Gers",
    "Gironde", "Hérault", "Ille-et-Vilaine", "Indre", "Indre-et-Loire",
    "Isère", "Jura", "Landes", "Loir-et-Cher", "Loire", "Haute-Loire",
    "Loire-Atlantique", "Loiret", "Lot", "Lot-et-Garonne", "Lozère",
    "Maine-et-Loire", "Manche", "Marne", "Haute-Marne", "Mayenne",
    "Meurthe-et-Moselle", "Meuse", "Morbihan", "Moselle", "Nièvre",
    "Nord", "Oise", "Orne", "Pas-de-Calais", "Puy-de-Dôme", "Pyrénées-Atlantiques",
    "Hautes-Pyrénées", "Pyrénées-Orientales", "Bas-Rhin", "Haut-Rhin",
    "Rhône", "Haute-Saône", "Saône-et-Loire", "Sarthe", "Savoie", "Haute-Savoie",
    "Paris", "Seine-Maritime", "Seine-et-Marne", "Yvelines", "Deux-Sèvres",
    "Somme", "Tarn", "Tarn-et-Garonne", "Var", "Vaucluse", "Vendée", "Vienne",
    "Haute-Vienne", "Vosges", "Yonne", "Territoire de Belfort", "Essonne",
    "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne", "Val-d'Oise"
  ].sort(() => 0.5 - Math.random()).slice(0, 4);

  selectedOption: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.departementRep = this.departements.at(Math.floor(Math.random() * this.departements.length));
    this.sendData();
  }

  selectOption(option: string) {
    this.selectedOption = option;
    if (this.selectedOption === this.departementRep) {
      alert(`Vous avez trouvé le bon departement`);
    } else {
      alert('Erreur, vous deviez selectionnez le : '+ this.departementRep);
    }
    location.reload();
  }

  sendData() {
      if (this.departementRep != null)
        this.dataService.changeData(this.departementRep);
      console.log(this.selectedOption);
    }
}
