import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true, // latest Angular version
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: User[] = []; // Array to store users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers(); // Fetch users on component initialization
  }

  // Fetch users from the API
  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data; // Assign the fetched users to the array
        console.log('Users fetched successfully:', this.users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
    });
  }
}