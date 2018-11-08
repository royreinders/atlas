import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {ClrWizard} from "@clr/angular";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge: ClrWizard;
  lgOpen: boolean = false;
  selected_tool: any;
  new_tool: boolean = true;
  deleteToolModal: boolean = false;
  form_tool: Object;

  tools: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.GetTools().subscribe(
      data => this.tools = data
    );
  }

  AddTool(tool){
    console.log(tool)
  }

}
