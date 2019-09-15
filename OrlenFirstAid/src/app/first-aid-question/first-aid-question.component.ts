import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-aid-question',
  templateUrl: './first-aid-question.component.html',
  styleUrls: ['./first-aid-question.component.scss']
})
export class FirstAidQuestionComponent implements OnInit, AfterViewInit {
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

    const recognition = new SpeechRecognition();
    const speechRecognitionList =  new SpeechGrammarList();
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
