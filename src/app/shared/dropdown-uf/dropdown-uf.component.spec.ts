import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUfComponent } from './dropdown-uf.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AfterViewInit, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UnidadeFederativa } from '../../core/types/type';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';

@Component({
  template: ` <app-dropdown-uf
    label="Estado"
    placeholder="Estado"
    [control]="estadoControl"
  >
  </app-dropdown-uf>`,
})
class HostComponent implements AfterViewInit{

  estadoControl = new FormControl<any | null>(
    5,
    Validators.required
  );

  ngAfterViewInit(): void {
    this.estadoControl.setValue(10);
  }
}

describe('DropdownUfComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUfComponent, HostComponent],
      providers: [
        {
          provide: UnidadeFederativaService,
          useValue: {
            listar: () =>
              of([
                {
                  id: 1,
                  nome: 'Minas Gerais',
                  sigla: 'MG',
                },
              ]),
          },
        },
      ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatIconModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
