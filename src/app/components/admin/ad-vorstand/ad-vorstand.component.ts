import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VorstandItem } from '../../interfaces.model';

@Component({
  selector: 'app-ad-vorstand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-vorstand.component.html',
  styleUrl: './ad-vorstand.component.scss'
})
export class AdVorstandComponent {

  main = inject(MainService);

  addPers: VorstandItem = {
    amt: "",
    name: "",
    city: "",
    enabled: false
  }

  changeEdit(i: number) {
    this.main.vorstand[i].enabled = !this.main.vorstand[i].enabled;
  }

  deletePerson(i: number) {
    this.main.vorstand.splice(i, 1);
  }

  addPerson() {
    if (this.addPers.amt && this.addPers.name && this.addPers.city) {
      this.main.vorstand.push({ ...this.addPers });
      this.erasePerson()
    }
  }

  erasePerson() {
    this.addPers = {
      amt: "",
      name: "",
      city: "",
      enabled: false
    };
  }
  

}
