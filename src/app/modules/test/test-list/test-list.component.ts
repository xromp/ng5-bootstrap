import { Component, OnInit,EventEmitter,Output, Input, NgModule, Directive, ElementRef, Renderer } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { Observer,Observable } from 'rxjs/Rx';
import { FormsModule, 
	FormGroup, 
	FormControl, 
	ReactiveFormsModule, 
	Validators, 
	FormBuilder} from '@angular/forms';

class Test {
	public setup:string;
	public punchline:string;
	public hide:boolean;
  
	constructor(setup: string, punchLine:string){
	  this.setup = setup;
	  this.punchline = punchLine;
	  this.hide = true;
	}
  
	toggle(){
	  this.hide = !this.hide;
	}
}

@Component({
	selector:'test-form',
	templateUrl:'./test-form.html'
  })
export class TestFormComponent {
	@Output() jokeCreated = new EventEmitter<Test>();

	createJoke(setup: string, punchline: string) {
		this.jokeCreated.emit(new Test(setup, punchline));
	}
}


@Component({
	selector:'test',
	template:`
	<div class="card card-block">
	  <h4 class="card-title">
		<ng-content select=".setup"></ng-content>
	  </h4>
	  
	  <div class="body">
	  	<span [innerHTML]="data.hide"></span>
		<p class="card-text"
			[hidden]="data.hide">
			<ng-content select=".punchline"></ng-content>
		</p>
		<a class="btn btn-primary"
			(click)="data.toggle()">Tell Me
		</a>
	  </div>
	</div>
	`
})
export class TestComponent {
	@Input('test') data: Test;
	
}

@Component({
  selector: 'test-list',
  template:`
	<test-form (jokeCreated)="addJoke($event)" ccChangeColor></test-form>
	<test *ngFor="let j of tests" [test]="j">
		<span class="setup">{{ j.setup }}?</span>
		<h1 class="punchline">{{ j.punchline }}</h1>
	</test>
  `,
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {
	tests: Test[];

	constructor() {
	  this.tests = [
		new Test("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
		new Test("What kind of chjokesjokeseese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
		new Test("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
	  ];
	}
  
	addJoke(joke) {
	  this.tests.unshift(joke);
	}

}

@Component({
	selector:'ngforgroup-example',
	template:`
		<h4>NgFor (Group) </h4>
		<ul>
			<li *ngFor="let person of people; let i = index">
				{{i+1}} - {{ person.name }}
					<ul *ngFor="let skill of person.skills" [ngSwitch]="skill.title">
						<li *ngSwitchCase="'Angular'" class="text-primary">{{skill.title}}</li>
						<li *ngSwitchDefault class="text-success">{{skill.title}}</li>
					</ul>
			</li>
		</ul>
	`
})


export class NgForGroupExampleComponent {
	people:any=[
		{name:'a', age:4, 
			skills:[
				{title:'Angular', exp:'1'},
				{title:'Python', exp:'0.5'},
				{title:'Laravel', exp:'3'},

			]
		},
		{name:'b', age:3,
			skills:[
				{title:'Angular', exp:'3'},
			]
		},
		{name:'c', age:2},
		{name:'d', age:1}
	];
}

@Directive({
	selector:"[ccChangeColor]"
})
export class ChangeColorDirective{
	constructor(private el:ElementRef,
		private renderer:Renderer ){
			console.log("new Directive");
			// noninspectable
			renderer.setElementStyle(el.nativeElement,"color","blue");
			// el.nativeElement.style.color = 'blue';
		}
} 

@Component({
	selector:'async-example',
	template:`
	<div class="card card-block">
		<h4 class="card-title">AsyncPipe</h4>
		<p class="card-text" ngNonBindable>{{ observe | async }}</p>
			<p class="card-text">{{ observe | async }}</p> 
			<p class="card-text">{{ observeData }}</p> 
	</div>
	`
})

export class AsyncExampleComponent {
	observe:Observable<number>;
	_subscribe:object;
	observeData:number;


	constructor(){
		this.observe = this.getObservable();
		this.getUsingBySubcription();
	}

	getObservable() {
		return Observable
		.interval(1000)
		.take(10)
		.map((v)=>v*v);
	}

	getUsingBySubcription(){
		this._subscribe = this.getObservable()
			.subscribe((v)=>this.observeData = v)
	}
}


@Component({
	selector:'ngform-example',
	templateUrl:'./ngform.html'
})

export class NgForExampleComponent implements OnInit {

	myform:FormGroup;
	firstname:FormControl;
	lastname:FormControl;
	email:FormControl;
	password:FormControl;
	language:FormControl;

	langs = [
		'English',
		'France',
		'German'
	];

	ngOnInit(){
		this.createFormControls();
		this.createForms();
	}

	createFormControls(){
		this.lastname = new FormControl('', Validators.required);
		this.firstname = new FormControl('', Validators.required);
		this.email = new FormControl('', [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			]);
		this.password = new FormControl('',[
				Validators.required,
				Validators.minLength(8)
			]);
		this.language = new FormControl('', Validators.required);
	}

	createForms(){
		this.myform = new FormGroup({
			name: new FormGroup({
				firstname:this.firstname,
				lastname:this.lastname
			}),
			email:this.email,
			password:this.password,
			language:this.language
		})
	}
}