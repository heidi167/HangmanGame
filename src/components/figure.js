export default function Figure (props) {
  const errors = props.wrongLetters.length;
  return (
    <>
      <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" fill="#fff" stroke="#000" strokeWidth="2"/>
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" stroke="#000" strokeWidth="2"/>
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" stroke="#000" strokeWidth="2"/>
      }
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" stroke="#000" strokeWidth="2"/>
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" stroke="#000" strokeWidth="2"/>
      }
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" stroke="#000" strokeWidth="2"/>
      }
      {errors > 6 &&
        <line x1="140" y1="50" x2="140" y2="20" stroke="#000" strokeWidth="2"/>
      }
      {errors > 7 &&
        <line x1="140" y1="20" x2="90" y2="20" stroke="#000" strokeWidth="2"/>
      }
      {errors > 8 &&
        <line x1="90" y1="20" x2="90" y2="200" stroke="#000" strokeWidth="2"/>
      }
      {errors > 9 &&
        <line x1="50" y1="200" x2="200" y2="200" stroke="#000" strokeWidth="2"/>
      }



      </svg>
  </>
  )
}