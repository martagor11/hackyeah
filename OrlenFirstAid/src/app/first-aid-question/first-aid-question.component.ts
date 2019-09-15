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
  useVoiceAssistant = false;
  playTempo = false;
  tempoSound = new Audio('../../assets/sounds/push.wav');
  tempoInterval;

  showGuide = false;

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

  guideList = [
    'Poszkodowany musi leżeć na plecach.',
    'Wymierz dłonią odpowiednią odległość.',
    'Zapleć dłonie razem.',
    'Uciskaj w tempie ok. 100 razy na minutę (włącz tempo klikając przycisk poniżej).',
  ];

  constructor(private ref: ChangeDetectorRef) {
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
    if (this.useVoiceAssistant) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.question + ' ' + this.answers.join(', ');
      speechSynthesis.speak(msg);
    }
  }

  readGuide() {
    if (this.useVoiceAssistant) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = this.guideList.join(', ');
      speechSynthesis.speak(msg);
    }
  }

  stopReadingQuestionsAndAnswers() {
    speechSynthesis.cancel();
  }

  startVoiceRecognition() {
    if (this.useVoiceAssistant) {
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
  }

  stopVoiceRecognition() {
    if (this.useVoiceAssistant) {
      this.recognition.stop();
      console.log('stop speech recognition');
    }
  }

  clickAnswer(answer) {
    this.selectedQuestion = this.answers.indexOf(answer);
    if (this.useVoiceAssistant) {
      this.stopVoiceRecognition();
      this.stopReadingQuestionsAndAnswers();
    }
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
        this.showGuide = true;
        this.readGuide();
        this.ref.detectChanges();
      }
    }, 400);
  }

  toggleAssistance() {
    this.useVoiceAssistant = !this.useVoiceAssistant;
    if (this.useVoiceAssistant) {
      this.readQuestionAndAnswers();
      this.startVoiceRecognition();
    } else {
      this.stopReadingQuestionsAndAnswers();
      this.stopVoiceRecognition();
    }
  }

  toggleTempo() {
    this.playTempo = !this.playTempo;
    if (this.playTempo) {
      this.tempoInterval = setInterval(() => {
        this.tempoSound.play();
      }, 200);
    } else {
      clearInterval(this.tempoInterval);
    }

  }
}
