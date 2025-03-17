import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Optional, but recommended
  imports: [RouterOutlet],  // ✅ Correct import for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-product-store';
}
