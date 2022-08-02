import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';


describe('CoursesCardListComponent', () => {
  let component: CoursesCardListComponent;
  let fixture = ComponentFixture<CoursesCardListComponent>;
  let element = DebugElement;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CoursesModule,
      ],
    }).compileComponents()
      .then(() => {
        const fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        const element = fixture.debugElement;
      });
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display the course list", () => {
    component.courses = setupCourses();

    // const cards = element.queryAll(By.css('.course-card'));
    const cards = document.querySelectorAll('.course-card');
    expect(cards).toBeTruthy('Could not find cards');
    // expect(cards.length).toBe(12, 'Unespected number of curses');
  });

/*   it("should display the first course", () => {

    component.courses = setupCourses();
    const fixture = TestBed.createComponent(CoursesCardListComponent);
    fixture.detectChanges();
    const course = component.courses[0];
    const card = document.querySelectorAll('.course-card:first-child');
    let title = document.querySelector('mat-card-title');
    title = fixture.nativeElement;
    expect(card).toBeTruthy('Could not find course card');
    expect(title.textContent).toBe(course.titles.description);
    // expect(card.querySelector('mat-card-title')?.textContent).toContain('Serverless Angular with Firebase Course');

  }); */


});


