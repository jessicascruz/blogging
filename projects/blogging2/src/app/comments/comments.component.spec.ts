import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change answer field', () => {
    component.mudaCampoResposta();
    expect(component.campoResposta).toBeTrue();
  });

  it('should pass data to modal', () => {
    const id = 2;

    component.dadosModal(id);
    fixture.detectChanges();

    expect(component.dadosUsuarioModal.length).toEqual(1);
  });

  it('should change value of add', () => {
    component.addUsuario();

    expect(component.adicionar).toBeFalse();
  });
});
