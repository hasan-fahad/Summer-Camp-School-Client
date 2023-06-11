

const SectionTitle = ({subheading, heading}) => {
    return (
        <div 
           className="mx-auto text-center md:w-4/12 mb-4 my-12">
        <p className="text-red-600 mb-2">{subheading}</p>
        <h3 style={{
            '--color-1': 'deepskyblue',
            '--color-2': 'orange',
            background: `
              linear-gradient(
                170deg,
                var(--color-1),
                var(--color-2) 80%
              )
            `,
        
            // Unrelated styles:
            color: 'white',
            textAlign: 'center',
            padding: 30,
            borderRadius: 12,
          }} className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;