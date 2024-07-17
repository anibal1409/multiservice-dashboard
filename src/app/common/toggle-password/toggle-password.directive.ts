import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTogglePassword]'
})
export class TogglePasswordDirective {
  @Input()
  iconVisible: boolean = false;
  @Input()
  inputEl!: HTMLInputElement;

  constructor(private el: ElementRef) {}

  @HostBinding('class.show-icon') showIconClass: boolean = false;

  ngOnInit() {
    this.toggleInputType();
  }

  toggleInputType() {
    this.inputEl.type = this.iconVisible ? 'text' : 'password';
    this.showIconClass = this.iconVisible;
  }

  @HostListener('click')
  toggleState() {
    this.iconVisible = !this.iconVisible;
    this.toggleInputType();
    this.updateIconState();
  }

  updateIconState() {
    const iconElement = this.el.nativeElement.querySelector('mat-icon');
      iconElement.textContent = this.iconVisible ? 'visibility' : 'visibility_off';
  }

}
