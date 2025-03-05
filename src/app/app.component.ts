import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.login().subscribe((response) => {
      console.log(response);
      this.whoAmI().subscribe((response) => {
        console.log(response);
      });
    });
  }

  login(): Observable<any> {
    const username = 'ericp';
    const password = '5772';
    return this.http.post(
      `${environment.apiUrl}/users/login`,
      { username, password },
      { withCredentials: true }
    );
  }

  whoAmI(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/whoami`, {
      withCredentials: true,
    });
  }
}
