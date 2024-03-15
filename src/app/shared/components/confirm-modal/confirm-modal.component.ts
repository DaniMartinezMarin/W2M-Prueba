import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  constructor(public dialog: MatDialogRef<ConfirmModalComponent>) {}

  cancel(): void {
    this.dialog.close(false);
  }
  confirm(): void {
    this.dialog.close(true);
  }
}
