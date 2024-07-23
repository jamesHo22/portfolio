
*12/10/2023*
# How Tomorrow's Machines Will Be Built
*Reimagining the Hardware Development Toolchain*

## Hardware Design Hasn’t Changed Since the 80’s
Almost every physical object you interact with today began its life as a 3D model rendered on a computer. The class of programs engineers use to create these digital models is known as CAD, short for “computer aided design”.

Hardware companies innovated slowly before CAD because designs were locked away on paper drawings. All the digital functions we take for granted today did not yet exist. By creating geometry on computers, companies could design, analyze, and manufacture products much faster.

Organizations today face a similar challenge: the ability to manipulate geometry is locked in CAD software. This limits the ways hardware can be designed and forces engineers to perform tedious and trivial work. This is because CAD hasn’t changed in the past 50 years.

Using CAD is like using a flip phone. While a flip phone can make calls, text, and surf the web, its form factor and design philosophy limits its capabilities. Before the invention of the smartphone, companies just made incremental improvements to what already existed.

The same thing is happening with CAD programs.

When mainframe computers became useful, we moved from physical to digital drawings.

When personal computers became more powerful, we moved from CAD on a dedicated workstation to CAD on a PC.

When cloud computing became widespread, we moved from CAD on laptops to CAD on the web.

CAD programs haven’t changed — only where the program is executed has.

The tools we use shape how we think and work. Is the way companies designed hardware 50 years ago still the best way to design hardware today?

There is an opportunity for a new hardware design paradigm. How could hardware be developed if we rebuilt our tools to take full advantage of the technologies we have at our disposal?

Before we answer that question, let’s see how companies develop hardware today.

## How is Hardware Developed With Today’s Tools?
When building something that hasn’t been built before, the fastest path to a working product is through iteration. After each iteration, you learn more about your system and incorporate those learnings into the next product. The faster you iterate, the faster you learn. This is the most valuable thing you can do if you want to de-risk a new technology. An engineering team’s iteration rate is proportional to the speed of their tools and processes.

It’s typical for engineers to perform analyses in spreadsheets to determine the general shape of a part before it is modelled in CAD. If the part is complex, simulations are run to better understand how the part may fail.

Once the high level design is complete, the engineer then begins detailed CAD. Features like threaded holes, nuts and bolts, and filleted corners are added to ensure that the part can be put together.

Documentation is then created to capture the assumptions and analyses that went into the part’s design. This information is often stored in spreadsheets, slide decks, and text documents. The work is reviewed by other engineers, feedback is provided and questions are raised. The engineer then updates their assumptions and improves their design.

The cost of the improvement is the time required to update the analyses, the presentations, and the CAD. Thus, in a given amount of time, the number of design iterations you can perform is limited by how long it takes to update the work.

## What is Wrong With Today’s Hardware Development Toolchain?
Today’s hardware development workflows are tedious and manual. Every time you make a change, you need to manually synchronize it across a set of analysis, design, and documentation software.

Designing a bolt pattern, for example, starts with creating a spreadsheet to compute how much load each bolt will see. The spacing of the bolts then need to be manually copied into the CAD program. The issue is that the CAD and analysis aren’t linked — if the dimensions in CAD change, the spreadsheet has to be manually updated and its results copied into a new analysis report. While there is version control for the parts in CAD, associated analyses aren’t fully tracked. Given these issues, engineers end up spending a significant portion of their time wrangling tools instead of designing hardware.


## How Things Will Be Built in The Next Century
The purpose of hardware engineering is to turn ideas into physical objects to address a need. The dream hardware engineering tool is a device that will create whatever you tell it to create — a Universal Designer. While it may sound crazy, we know that it is possible — generative AI has demonstrated it in the digital domain and advanced manufacturing methods are enabling autonomous fabrication. Since all analyses, engineering documents, and CAD is code, there’s no reason why AI can’t design and build hardware. The question is, how do we transition from our current state to a future where a sketch on the back of a napkin can be transformed into a real product?

There are two parts to this problem: the first one is building a system that can turn concepts into manufacturable designs; the second one is creating a system that can autonomously fabricate any design. I will focus on the first challenge in this article — building a system that can turn ideas into designs.

It’s difficult to say what such a system will look like without building it. I will focus instead on the challenges a Universal Designer will have to overcome for people to adopt it.

### “Why, why, and why?” — Justifying Design Decisions
The decisions an engineer makes is informed by the product development timeline, available resources, and customer requirements. A “good” design has to be evaluated in the context of the entire business, not only from a physics perspective. This is already hard for humans to do and will likely be the biggest challenge for an AI designer. How will the AI understand the engineering and business context? Will a human have to tell it everything or will it ask people for information? How will it communicate the design it has settled on?

Until an AI can explain why a design satisfies engineering and business objectives, a human will not trust a generated design.

### 90 Degree Corners — Designing for Manufacturability
Engineers have an intuition for how hard something is to manufacture. For example, an intricate part for a medical device can take hours of machining to produce. There are also features that are extremely costly or impossible to create. An example of such a feature is machining a sharp inner corner using a mill.

A mill works by spinning a cylindrical cutting tool and moving it through a block of material. During each revolution, the edge of the cutting tool shaves off a tiny slice of the material, slowly sculpting a block of metal into its final form. Because the cutting tool spins, the smallest internal feature (features like holes or recessed areas) is limited to the diameter of the tool. Thus, it is impossible (using this kind of tool) to cut a completely sharp corner within a block of material.

A system that designs hardware must know what is manufacturable for it to be useful. You can design the most beautiful part, but if you cannot build it, it is useless.

### Open Architecture CAD — Extending Capabilities
Allowing anyone or any program to manipulate geometry opens up faster and safer workflows. Instead of manually updating analyses, CAD, and reports every time you make a change, a hardware management system could detect changes and automatically update analyses and generate presentations. To take things further, downstream manufacturing programs could autonomously generate machining tool paths and factory layouts to produce and assemble the product. But for any of this to happen, the underlying CAD geometry must be easily accessible. This is not possible using industry standard CAD programs.

Addressing these problems is the first step in realizing a Universal Designer.

## The Time is Now
Hardware engineers are frustrated by how design tools have lagged behind what is technologically possible and businesses already understand the impact of more efficient and flexible tools. The confluence of generative AI, advanced manufacturing, and demand for hardware solutions provide fertile soil for a new hardware development paradigm. By reinventing the hardware development tool chain, we get closer to a future where anyone with a napkin sketch can turn their idea into reality.