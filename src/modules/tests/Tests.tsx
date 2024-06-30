"use client"

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";

export default function Tests() {
  const [data, setData] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState({ index: null, isCorrect: null });
  const audioRefs = useRef([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handlePlayPause = (index, event) => {
    if (playingIndex !== null) {
      audioRefs.current[playingIndex].pause();
      clearTimeout(audioRefs.current[playingIndex].timeoutId);
      if (playingIndex === index) {
        setPlayingIndex(null);
        return;
      }
    }

    audioRefs.current[index].play();
    audioRefs.current[index].timeoutId = setTimeout(() => {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0;
      setPlayingIndex(null);
    }, 5000);

    setPlayingIndex(index);

    const isCorrect = event.currentTarget.id === "true";
    setSelectedOption({ index, isCorrect });
    setFeedbackMessage(isCorrect ? "Correct answer!" : "Incorrect answer. Try again.");
  };

  useEffect(() => {
    axios("http://127.0.0.1:8001/question_with_answer/").then(response => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <section>
      <div className={"relative h-screen container mx-auto"}>
        <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] px-[120px] py-[100px] bg-white border-[8px] border-[#63CAE0] rounded-[30px]"}>
          {data.map((test, testIndex) => (
            <div key={test.question}>
              <h2 className={"font-extrabold text-center text-[48px] mb-10"}>{test.question}</h2>
              <div className={"flex items-center gap-[120px]"}>
                <Image src={"/tests/tiger.png"} alt={"Tiger"} width={330} height={350} />
                <div className={"flex flex-col gap-3"}>
                  {test.answers.map((option, optionIndex) => {
                    const audioRef = el => {
                      audioRefs.current[testIndex * test.answers.length + optionIndex] = el;
                    };

                    const isSelected = selectedOption.index === testIndex * test.answers.length + optionIndex;
                    const borderColor = isSelected ? (selectedOption.isCorrect ? 'border-green-600' : 'border-red-600') : 'border-transparent';

                    return (
                      <div key={option.answer} className={`flex w-fit gap-5 ${borderColor} border-4 p-2`}>
                        <button
                          id={`${option.is_correct}`}
                          className={`audio-button ${playingIndex === testIndex * test.answers.length + optionIndex ? 'playing' : ''}`}
                          onClick={(event) => handlePlayPause(testIndex * test.answers.length + optionIndex, event)}
                        >
                          <svg width="63" height="68" viewBox="0 0 63 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_134_41349" maskUnits="userSpaceOnUse" x="0.0322266" y="0.693848" width="62" height="67" fill="black">
                              <rect fill="white" x="0.0322266" y="0.693848" width="62" height="67"/>
                              <path d="M0.0322266 10.6938C0.0322266 5.171 4.50938 0.693848 10.0322 0.693848H52.0322C57.5551 0.693848 62.0322 5.171 62.0322 10.6938V52.6938C62.0322 58.2167 57.5551 62.6938 52.0322 62.6938H10.0322C4.50938 62.6938 0.0322266 58.2167 0.0322266 52.6938V10.6938Z" fill="#34A853"/>
                            </mask>
                            <path d="M0.0322266 10.6938C0.0322266 5.171 4.50938 0.693848 10.0322 0.693848H52.0322C57.5551 0.693848 62.0322 5.171 62.0322 10.6938V52.6938C62.0322 58.2167 57.5551 62.6938 52.0322 62.6938H10.0322C4.50938 62.6938 0.0322266 58.2167 0.0322266 52.6938V10.6938Z" fill="#34A853"/>
                            <path d="M0.0322266 0.693848H62.0322H0.0322266ZM62.0322 52.6938C62.0322 60.9781 55.3165 67.6938 47.0322 67.6938H15.0322C6.74796 67.6938 0.0322266 60.9781 0.0322266 52.6938C0.0322266 55.4553 4.50938 57.6938 10.0322 57.6938H52.0322C57.5551 57.6938 62.0322 55.4553 62.0322 52.6938ZM0.0322266 62.6938V0.693848V62.6938ZM62.0322 0.693848V62.6938V0.693848Z" fill="#126227" mask="url(#path-1-outside-1_134_41349)"/>
                            <path d="M19.0322 29.0296V34.3629C19.0322 35.0963 19.6322 35.6963 20.3656 35.6963H24.3656L28.7522 40.0829C29.5922 40.9229 31.0322 40.3229 31.0322 39.1363V24.2429C31.0322 23.0563 29.5922 22.4563 28.7522 23.2963L24.3656 27.6963H20.3656C19.6322 27.6963 19.0322 28.2963 19.0322 29.0296ZM37.0322 31.6963C37.0322 29.3363 35.6722 27.3096 33.6989 26.3229V37.0563C35.6722 36.0829 37.0322 34.0563 37.0322 31.6963ZM33.6989 21.6296V21.8963C33.6989 22.4029 34.0322 22.8429 34.4989 23.0296C37.9389 24.4029 40.3656 27.7763 40.3656 31.6963C40.3656 35.6163 37.9389 38.9896 34.4989 40.3629C34.0189 40.5496 33.6989 40.9896 33.6989 41.4963V41.7629C33.6989 42.6029 34.5389 43.1896 35.3122 42.8963C39.8322 41.1763 43.0322 36.8163 43.0322 31.6963C43.0322 26.5763 39.8322 22.2163 35.3122 20.4963C34.5389 20.1896 33.6989 20.7896 33.6989 21.6296Z" fill="white"/>
                          </svg>
                        </button>
                        <audio ref={audioRef} src={option.audio_file} style={{ display: 'none' }}></audio>
                        <h3 className={"w-fit text-[36px] font-extrabold"}>{option.answer}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
              {playingIndex !== null && (
                <div className="text-center mt-5">
                  <p className={`text-2xl font-bold ${feedbackMessage === "Correct answer!" ? 'text-green-600' : 'text-red-600'}`}>
                    {feedbackMessage === "Correct answer!" ? "Правильно!" : "Неправильно"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
