import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-aid-question',
  templateUrl: './first-aid-question.component.html',
  styleUrls: ['./first-aid-question.component.scss']
})
export class FirstAidQuestionComponent implements OnInit {
  question: string;
  answers: string[];
  currentQuestion = 0;
  selectedQuestion = null;
  recognition = new webkitSpeechRecognition();
  voiceAssistant = false;

  questionsList = [
    {
      question: 'Kto jest poszkodowany?',
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

  constructor(private ref: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.recognition.lang = 'pl-PL';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.displayQuestion();
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

  stopReadingQuestionsAndAnswers() {
    speechSynthesis.cancel();
  }

  startVoiceRecognition() {
    this.recognition.start();

    this.recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const answer = event.results[last][0].transcript;

      this.clickAnswer(answer);
    };

    this.recognition.onspeechend = () => {
      this.stopVoiceRecognition();
    };
  }

  stopVoiceRecognition() {
    this.recognition.stop();
    console.log('stop speech recognition');
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
        this.startVoiceRecognition();
        this.ref.detectChanges();
      } else {
        this.router.navigateByUrl('first-aid-guide');
      }
    }, 500);
  }

  toggleAssistance() {
    this.voiceAssistant = !this.voiceAssistant;
    if (this.voiceAssistant) {
      this.readQuestionAndAnswers();
      this.startVoiceRecognition();
    } else {
      this.stopReadingQuestionsAndAnswers();
      this.stopVoiceRecognition();
    }
  }
}
