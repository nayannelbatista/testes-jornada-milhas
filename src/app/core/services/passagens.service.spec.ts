import { TestBed } from '@angular/core/testing';

import { PassagensService } from './passagens.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('PassagensService', () => {
  let service: PassagensService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PassagensService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deveria retornar query correta quando passar uma busca correta para #converterParametroParaString()', () => {
    const busca = { dataIda: '02/01/2024', pagina: 1, porPagina: 5 };

    const query = service.converterParametroParaString(busca);

    expect(query).toBe('dataIda=02/01/2024&pagina=1&porPagina=5');
  });

  it('deveria retornar query correta quando passar uma busca com parâmetro falso para #converterParametroParaString()', () => {
    const busca = { dataIda: '02/01/2024', pagina: null, porPagina: 5 } as any;

    const query = service.converterParametroParaString(busca);

    expect(query).toBe('dataIda=02/01/2024&porPagina=5');
  });

  it('deveria retornar passagens quando chamar #getPassagens()', () => {
    const busca = { dataIda: '02/01/2024', pagina: 1, porPagina: 5 };

    const resultadoPassagemEsperado = { precoMin: 500, precoMax: 1000 }

    service.getPassagens(busca).subscribe((resultado) => {
      expect(resultado.precoMin).toBe(resultadoPassagemEsperado.precoMin);
      expect(resultado.precoMax).toBe(resultadoPassagemEsperado.precoMax);
    });

    const req = httpTestingController.expectOne(
      `${service.apiUrl}/passagem/search?${service.converterParametroParaString(busca)}`
    );

    expect(req.request.method).toBe('GET');
    req.flush(resultadoPassagemEsperado);
  });
});
