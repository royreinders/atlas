import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import {ClrWizard, ClrModal,ClrDatagridStringFilterInterface} from "@clr/angular";

export class ToolFilter implements ClrDatagridStringFilterInterface<any> {
  accepts(tool: any, search: string): boolean {
    return tool.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @ViewChild("wizardlg", { static: true }) wizardLarge: ClrWizard;
  @ViewChild("toolForm", { static: true }) formData: any;

  lgOpen: boolean = false;
  selected_tool: any;
  new_tool: boolean = true;
  deleteToolModal: boolean = false;
  form_tool: any;
  loading: boolean = false;
  test_output: any = {};
  testoutputModalOpen: boolean = false;
  commandformat_error = false;
  
  test_target = ''
  test_port = ''
  test_commandstring = ''

  tools: Object;

  private toolFilter = new ToolFilter()

  constructor(private data: DataService) { 
    this.form_tool = {}; 
  }

  ngOnInit() {
    this.GetTools()
  }

  FinishWizard(tool){
    if(this.new_tool){
      this.AddTool(tool)
    }
    else {
      this.EditTool(tool)
    }
  }

  AddTool(tool){
    this.data.AddTool(tool).subscribe(data => {
      tool = data; 
      this.GetTools();})
  }

  EditTool(tool){
    this.wizardLarge.reset()
    this.data.EditTool(tool).subscribe(data => {
      tool = data; 
      this.GetTools();})
  }

  DeleteTool(tool){
    this.data.DeleteTool(tool).subscribe(data => {
      this.GetTools();})
    this.deleteToolModal = false    
  }

  GetTools(){ 
    this.data.GetTools().subscribe(data => this.tools = data) 
  }

  CorrectCommandFormat(){
    if (this.form_tool.commandstring){
      if (this.form_tool.commandstring.indexOf("<host>") == -1 ){
        console.log("JEPENIS")
        return false
      }
      }
  }

  ParseCommand(){
    if(this.form_tool.path){
      this.test_commandstring = this.form_tool.commandstring.replace("<host>", this.test_target).replace("<port>", this.test_port)
    }
    else {
      this.test_commandstring = this.form_tool.commandstring.replace("<host>", this.test_target).replace("<port>", this.test_port)
    }   
  }

  onKey(event: any) { // without type info
    this.test_commandstring = event.target.value;
  }

  Execute(){
    this.data.Execute('{"commandstring":"'+this.test_commandstring+'"}').subscribe(data => {
      this.test_output = data;
      this.loading = false;
      this.testoutputModalOpen = true;
      console.log(this.test_output)})    
  }
}
