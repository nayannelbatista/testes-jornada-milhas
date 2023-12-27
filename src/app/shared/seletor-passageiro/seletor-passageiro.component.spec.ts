import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPassageiroComponent } from './seletor-passageiro.component';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';
import { Component, Host, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
    <app-seletor-passageiro [(ngModel)]="seletor" titulo="Adultos" subtitulo="(Acima de 12 anos)"/>
  `,
})
class HostComponent implements OnInit {
  seletor!: string;

  ngOnInit(): void {
    this.seletor = "adultos";
  }
}

xdescribe('SeletorPassageiroComponent with HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        HostComponent,
        SeletorPassageiroComponent,
        BotaoControleComponent
      ]
    });
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('SeletorPassageiroComponent', () => {
  let component: SeletorPassageiroComponent;
  let fixture: ComponentFixture<SeletorPassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SeletorPassageiroComponent,
        BotaoControleComponent
      ]
    });
    fixture = TestBed.createComponent(SeletorPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, "onChange");
    spyOn(component, "onTouch");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment 1 when call #incrementar()', () => {
    component.incrementar();
    const valorEsperadoDoValue = 1;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(1);
    expect(component.onTouch).toHaveBeenCalledTimes(1);
  });

  it('should increment 2 when call #incrementar() 2 times', () => {
    component.incrementar();
    component.incrementar();

    const valorEsperadoDoValue = 2;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(2);
    expect(component.onTouch).toHaveBeenCalledTimes(2);
  });

  it('should decrement 1 when call #decrementar()', () => {
    component.incrementar();
    component.decrementar();

    const valorEsperadoDoValue = 0;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(2);
    expect(component.onTouch).toHaveBeenCalledTimes(2);
  });

  // xit('should increment 2 when call #incrementar 2 times', () => {
  //   component.incrementar();
  //   component.incrementar();

  //   const valorEsperadoDoValue = 2;

  //   expect(component.value).toBe(valorEsperadoDoValue);
  //   expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

  //   expect(component.onChange).toHaveBeenCalledTimes(2);
  //   expect(component.onTouch).toHaveBeenCalledTimes(2);
  // });

  it('should increment 1 when call #incrementar()', () => {
    component.incrementar();
    const valorEsperadoDoValue = 1;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(1);
    expect(component.onTouch).toHaveBeenCalledTimes(1);
  });

  it('should increment 2 when call #incrementar() 2 times', () => {
    component.incrementar();
    component.incrementar();

    const valorEsperadoDoValue = 2;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(2);
    expect(component.onTouch).toHaveBeenCalledTimes(2);
  });

  it('should decrement 1 when call #decrementar()', () => {
    component.incrementar();
    component.decrementar();

    const valorEsperadoDoValue = 0;

    expect(component.value).toBe(valorEsperadoDoValue);
    expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

    expect(component.onChange).toHaveBeenCalledTimes(2);
    expect(component.onTouch).toHaveBeenCalledTimes(2);
  });

  // xit('should increment 2 when call #incrementar 2 times', () => {
  //   component.incrementar();
  //   component.incrementar();

  //   const valorEsperadoDoValue = 2;

  //   expect(component.value).toBe(valorEsperadoDoValue);
  //   expect(component.onChange).toHaveBeenCalledWith(valorEsperadoDoValue);

  //   expect(component.onChange).toHaveBeenCalledTimes(2);
  //   expect(component.onTouch).toHaveBeenCalledTimes(2);
  // });
});
