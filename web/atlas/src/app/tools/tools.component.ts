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
  @ViewChild("toolForm") formData: any;
  lgOpen: boolean = false;
  selected_tool: any;
  new_tool: boolean = true;
  deleteToolModal: boolean = false;
  form_tool: any;

  tools: Object;

  constructor(private data: DataService) { 
    this.form_tool = {}; 
  }

  ngOnInit() {
    this.GetTools()
  }

  AddTool(){
    console.log(this.form_tool)
    this.data.AddTool(this.form_tool).subscribe(data => this.form_tool = data)
    this.tools = null
    this.GetTools()
  }

  GetTools(){
      this.data.GetTools().subscribe(
      data => this.tools = data
    );
  }

}
