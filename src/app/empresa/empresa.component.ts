import { Empresa } from './../empresa';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {
  empresa: Empresa[] = [];
  formGroupEmpresa: FormGroup;


  constructor(
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
    ){
      this.formGroupEmpresa = formBuilder.group({
        id: [''],
        nome: [''],
        cidade: [''],
        loc: [''],
        ceo: ['']
      })
    }


    save() {
      this.empresaService.save(this.formGroupEmpresa.value).subscribe({
        next: (data) => {
          this.empresa.push(data);
          console.log(this.empresa);
        },
      });
      this.formGroupEmpresa.reset();
    }

}
