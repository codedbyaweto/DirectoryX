import { useState, type ChangeEvent } from "react";

interface StaffMember {
    id: number;
    name: string;
    email: string;
    department: "Engineering" | "Design" | "Marketing" | "Product";
    bio: string;
}

const staffs: StaffMember[] = [
    {
        id: 1,
        name: "Aweto Egbaoghene",
        email: "awetodavid@gmail.com",
        department: "Engineering",
        bio: "A problem-solver who enjoys building scalable software systems and tackling complex engineering challenges. Passionate about using technology to create meaningful solutions in environments where innovation is needed the most."
    },
    {
        id: 2,
        name: "Banjo Oluwafikayoomi",
        email: "banjojofk@yahoo.com",
        department: "Design",
        bio: "A creative designer passionate about crafting intuitive and visually appealing user interfaces. Focused on improving user experience through thoughtful layouts, accessibility, and modern design principles."
    },
    {
        id: 3,
        name: "Tobi Adisa",
        email: "tobiadisa@univaciti.com",
        department: "Marketing",
        bio: "A marketing strategist with strong expertise in digital campaigns, social media engagement, and audience analytics. Dedicated to building brand awareness and driving measurable growth."
    },
    {
        id: 4,
        name: "Chisom Iwejora",
        email: "heleniwejora@outlook.com",
        department: "Product",
        bio: "A product thinker focused on aligning user needs with business goals. Experienced in defining product roadmaps, prioritizing features, and guiding teams toward delivering impactful products."
    },
    {
        id: 5,
        name: "Oyebanji Anuoluwapo",
        email: "Anoyewapo@gmail.com",
        department: "Engineering",
        bio: "A backend-focused engineer who enjoys building reliable APIs and scalable server architectures. Passionate about clean code, performance optimization, and solving complex system problems."
    },
    {
        id: 6,
        name: "Olu-Adeyemi Toluwanimi",
        email: "princesscinderella@email.com",
        department: "Design",
        bio: "A detail-oriented designer who specializes in creating engaging and user-friendly interfaces. Loves transforming complex ideas into elegant and functional visual experiences."
    },
    {
        id: 7,
        name: "Chidera Ibiam",
        email: "ibiamchidera@gmail.com",
        department: "Marketing",
        bio: "A results-driven marketing professional focused on campaign strategy, customer engagement, and brand storytelling. Skilled at turning data insights into effective marketing decisions."
    },
    {
        id: 8,
        name: "Chidike Nwabueze",
        email: "nwabueze@outlook.com",
        department: "Product",
        bio: "A product manager dedicated to ensuring products solve real customer problems. Works closely with engineering and design teams to deliver features that improve usability and drive business value."
    }
];


const StaffDirectory = () => {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [selected, setSelected] = useState<StaffMember | null>(null);

    let filteredStaffs = staffs;

    if (search !== "") {
        const term = search.toLowerCase();
        filteredStaffs = filteredStaffs.filter(staff =>
            staff.name.toLowerCase().includes(term) ||
            staff.email.toLowerCase().includes(term)
        );
    }

    if (department !== "") {
        filteredStaffs = filteredStaffs.filter(staff => staff.department === department);
    }

    if (selected) {
        return (
            <div className="container">
                <div className="detail-card">
                    <h2>{selected.name}</h2>
                    <p><strong>Email:</strong> {selected.email}</p>
                    <p><strong>Department:</strong> {selected.department}</p>
                    <p><strong>Bio:</strong>{selected.bio}</p>
                    <button onClick={() => setSelected(null)}>Back</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">

            <div className="filters">
                <input
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />

                <select
                    value={department}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setDepartment(e.target.value)}
                >
                    <option value="">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Product">Product</option>
                </select>
            </div>

            <div className="staff-grid">

                {(search !== "" || department !== "") ? (
                    filteredStaffs.length > 0 ? (
                        filteredStaffs.map(staff => (
                            <div
                                key={staff.id}
                                className="staff-card"
                                onClick={() => setSelected(staff)}
                            >
                                <h3>{staff.name}</h3>
                                <p>{staff.email}</p>
                                <span className={`badge ${staff.department.toLowerCase()}`}>
                                    {staff.department}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="no-staff">No staff found</p>
                    )
                ) : null}

            </div>

        </div>
    );
}

export default StaffDirectory;