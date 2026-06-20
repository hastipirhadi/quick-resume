import React from 'react'

const FirstPage = () => {
  return (
    <section className="flex items-center justify-center gap-20 ">
      <div className="flex-col items-center justify-center gap-10 mt-24 w-[528px] ">
        <h1 className="text-6xl text-center">
          Your resume in three <span className="text-ocean"> easy </span> steps
        </h1>
        <p className="text-center mt-9 text-text-100">
          Resume builder tools that assemble well-formatted resume. Through a
          resume builder, you can create a professional-looking resume in a few
          easy steps. This resume builder offer different template options, so
          you can select the template that best fits your needs and style.
        </p>
        <div>
          <button>1</button>
          <p>Select a template from our collection.</p>
        </div>
      </div>
    </section>
  );
}

export default FirstPage