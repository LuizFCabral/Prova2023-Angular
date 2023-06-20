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
  empresas: Empresa[] = [];
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

    ngOnInit(): void {
      this.getEmpresas();
    }

    getEmpresas() {
      this.empresaService.getEmpresas().subscribe({
        next: (data) => {
          this.empresas = data;
          console.log(this.empresas);
        },
        error: () => console.log('Error to call endpoint'),
      });
    }

    save() {
      this.empresaService.save(this.formGroupEmpresa.value).subscribe({
        next: (data) => {
          this.empresas.push(data);
          console.log(this.empresas);
        },
      });
      this.formGroupEmpresa.reset();
    }

    remove(empresa: Empresa) {
      this.empresaService.remove(empresa).subscribe({
        next: () => {
          let index = this.empresas.indexOf(empresa);
          this.empresas.splice(index, 1);
        },
      });
    }

}
