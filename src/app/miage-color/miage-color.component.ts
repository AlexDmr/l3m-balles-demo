import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-miage-color',
  templateUrl: './miage-color.component.html',
  styleUrls: ['./miage-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiageColorComponent implements OnInit {
  @Input() color = '#000000';
  @Output() colorChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  get R(): number {
    return hexaToRGB(this.color).R;
  }
  set R(v: number) {
    const hexa = RGBToHexa({R: v, G: this.G, B: this.B});
    this.colorChange.emit(hexa);
  }

  get G(): number {
    return hexaToRGB(this.color).G;
  }
  set G(v: number) {
    const hexa = RGBToHexa({R: this.R, G: v, B: this.B});
    this.colorChange.emit(hexa);
  }

  get B(): number {
    return hexaToRGB(this.color).B;
  }
  set B(v: number) {
    const hexa = RGBToHexa({R: this.R, G: this.G, B: v});
    this.colorChange.emit(hexa);
  }

}

interface RGB {
  R: number;
  G: number;
  B: number;
}

const reHexa = /^#(..)(..)(..)$/
function hexaToRGB(hexa: string): RGB {
  const [str, sr, sg, sb] = reHexa.exec(hexa);
  return {
    R: +`0x${sr}`,
    G: +`0x${sg}`,
    B: +`0x${sb}`
  };
}

function RGBToHexa({R, G, B}: RGB): string {
  const sr = numberToHexa2(R);
  const sg = numberToHexa2(G);
  const sb = numberToHexa2(B);
  return `#${sr}${sg}${sb}`;
}

function numberToHexa2(v: number): string {
  const s = v.toString(16);
  return s.length === 1 ? `0${s}` : s;
}
