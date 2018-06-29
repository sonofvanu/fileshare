import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../../services/messageservice/messageservice.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService:MessageserviceService) { }

  ngOnInit() {
  }

}
