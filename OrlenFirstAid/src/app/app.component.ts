import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  question: string;
  answers: string[];

  ngOnInit() {
    this.question = 'Kto jest poszkodowanym?';
    this.answers = ['Niemowlę', 'Dziecko', 'Dorosły'];
  }

  ngAfterViewInit(): void {
    this.readQuestionAndAnswers();
    this.recogniseAnswer();
  }

  readQuestionAndAnswers() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = this.question + ' ' + this.answers.join(', ');
    speechSynthesis.speak(msg);
  }

  recogniseAnswer() {
    const answers = this.answers;

    const recognition = new webkitSpeechRecognition();
    const speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(answers.join(' | '), 1);
    recognition.grammars = speechRecognitionList;
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


  clickAnswer(answer) {
    console.log('clicked:' + answer);
  }
}
