import { Directive, Input, HostListener, OnInit, HostBinding } from '@angular/core';
@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() isVisible = "true";
  @Input() loggable = "false";
  @HostBinding('style.display') visibility;

  ngOnInit(): void {
    this.visibility = this.isVisible == "true" ? "initial" : "none";
  }
  @HostListener("click", ["$event.target"]) clickListener(element) {
    if (this.loggable == "true") {
      console.log(`${element.tagName.toUpperCase()} element has been clicked`);
    }
    return false;
  }
}