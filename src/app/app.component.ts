import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nombre = 'herlan';
  link = 'https://www.youtube.com';

  title = 'servifarma';

  constructor() {
  }

  ngOnInit(): void {
    ((d, m) => {
      const kommunicateSettings = {
        appId: '13d8ccb7236e9a8db89dee87f3c53b0e9',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      const h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }
}
