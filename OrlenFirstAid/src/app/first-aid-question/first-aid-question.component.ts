import {AfterViewInit, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-aid-question',
  templateUrl: './first-aid-question.component.html',
  styleUrls: ['./first-aid-question.component.scss']
})
export class FirstAidQuestionComponent implements OnInit, AfterViewInit {
  question: string;
  answers: string[];

  questionsList = [
    {
      question: 'Kto jest poszkodowanym?',
      answers: ['niemowlę', 'dziecko', 'dorosły']
    },
    {
      question: 'Czy poszkodowany jest przytomny?',
      answers: ['tak', 'nie']
    },
    {
      question: 'Czy wyczuwasz akcję serca?',
      answers: ['tak', 'nie']
    }
  ];

  currentQuestion = 0;
  selectedQuestion = null;
  voiceAssistant = true;

  constructor(private ref: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.displayQuestion();
  }

  ngAfterViewInit(): void {
    this.readQuestionAndAnswers();
    this.recogniseAnswer();
  }

  displayQuestion() {
    this.question = this.questionsList[this.currentQuestion].question;
    this.answers = this.questionsList[this.currentQuestion].answers;
  }

  readQuestionAndAnswers() {
    if (this.voiceAssistant) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.question + ' ' + this.answers.join(', ');
      speechSynthesis.speak(msg);
    }
  }

  recogniseAnswer() {
    if (this.voiceAssistant) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'pl-PL';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const answer = event.results[last][0].transcript;

        this.clickAnswer(answer);
      };

      recognition.onspeechend = () => {
        recognition.stop();
        console.log('stop speech recognition');
      };
    }
  }

  clickAnswer(answer) {
    this.selectedQuestion = this.answers.indexOf(answer);
    this.ref.detectChanges();
    setTimeout(() => {
      if (this.currentQuestion !== this.questionsList.length - 1) {
        this.currentQuestion++;
        this.selectedQuestion = null;
        this.displayQuestion();
        this.readQuestionAndAnswers();
        this.ref.detectChanges();
        this.recogniseAnswer();
      } else {
        this.router.navigateByUrl('first-aid-guide');
      }
    }, 500);
  }

  toggleAssistance() {
    this.voiceAssistant = !this.voiceAssistant;
  }
}
